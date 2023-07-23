

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, GeoPoint, getDocs, onSnapshot, setDoc, Timestamp } from '@angular/fire/firestore';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { values } from 'cypress/types/lodash';

import { deleteObject, getDownloadURL, Storage,  } from '@angular/fire/storage';
import { getStorage, ref, uploadBytes } from "firebase/storage";

@Component({
  selector: 'app-phatak',
  templateUrl: './phatak.component.html',
  styleUrls: ['./phatak.component.css']
})
export class PhatakComponent implements OnInit {
  
  

  showForm: boolean = false;
  phatakForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      personInChargeName: new FormControl('', [Validators.required]),
      personInChargePhone: new FormControl('', [Validators.required]),
      location: new FormGroup({
        latitude: new FormControl('',  [Validators.required, Validators.pattern("^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$")]),
        longitude: new FormControl('',  [Validators.required, Validators.pattern("^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$")]),
      }),
      imageUrl: new FormControl(''),
      phatakId: new FormControl(''),
      status: new FormControl(1),
      timings: new FormArray([])
    }
  ); 

  tempImage: any = null;
  phataksList: any[] = [];


  constructor(
    private firestore: Firestore,
    private storage: Storage
  ) { }

  ngOnInit(): void {
    //Read Operation
    let collectionRef = collection(this.firestore, "crossings");
    onSnapshot(collectionRef, (value) => {
      this.phataksList = value.docs.map(e => ({ id: e.id, ...e.data() }));
      console.log(this.phataksList);
      
    }, (error) => {
      console.log(error);
      
    })
    // getDocs(collectionRef).then((value) => {
    //   // console.log();
    //   this.phataksList = value.docs.map(e => ({ id: e.id, ...e.data() }));
    // })
  }

  getTimingsArrayFromPhatakForm() {
    return this.phatakForm.get('timings') as FormArray;
  }

  addTimingDetailsToArray() {
    this.getTimingsArrayFromPhatakForm().push(new FormGroup({
      time: new FormControl(null),
      trafficStatus: new FormControl(''),
      train: new FormControl('')
    }))
  }

  removeTimingDetailsToArray(idx: number) {
    this.getTimingsArrayFromPhatakForm().removeAt(idx);
  }

  // Create Operation
  async addPhatakToFirebase(){
    console.log("Function Add Executed");
    let value: any = {...this.phatakForm.value};
    
    // addDoc(collection(this.firestore, "phataks"), value)
    let phatakInfo = {
      phatakId: doc(collection(this.firestore, "crossings")).id ,
      location: new GeoPoint(value.location.latitude, value.location.longitude),
      name: value.name,
      personInChargeName: value.personInChargeName,
      personInChargePhone: value.personInChargePhone,
      status: value.status,
      timings: value.timings.map(e => ({
        trafficStatus: e.trafficStatus,
        train: e.train,
        time: Timestamp.fromDate(new Date(e.time))
      })),
      imageUrl: value.imageUrl
    }

		if(this.tempImage != null) {
			// console.log("this.tempImage.name = ",this.tempImage.name)
			let storageRef = ref(this.storage, "Crossings/" + this.tempImage.name)
			await uploadBytes(storageRef, this.tempImage);
			phatakInfo.imageUrl = await getDownloadURL(storageRef);
		}
    let docRef = doc(this.firestore, "crossings/" + phatakInfo.phatakId)
    setDoc(docRef, phatakInfo)
    .then(() => {
      console.log("Saved");
      this.phatakForm.reset({});
      this.showForm = !this.showForm;
    }, (error) => {
      console.error(error);
      
    })

    
  }

  updatePhatak(phatak: any) {
    this.showForm = true;
    let datepipe = new DatePipe('en-US');
    this.phatakForm = new FormGroup({
      name: new FormControl(phatak.name),
      personInChargeName: new FormControl(phatak.personInChargeName),
      personInChargePhone: new FormControl(phatak.personInChargePhone),
			location: new FormGroup(
        {latitude: phatak.location['latitude'],
        longitude: phatak.location['longitude'],
			},
      ),

      imageUrl: new FormControl(phatak.imageUrl),
      phatakId: new FormControl(phatak.phatakId),
      status: new FormControl(phatak.status),
      timings: new FormArray(phatak.timings.length === 0 ? [] : phatak.timings.map(element => new FormGroup({
        time: new FormControl(datepipe.transform(element.time.toDate(), 'yyyy-MM-dd HH:mm')),
        trafficStatus: new FormControl(element.trafficStatus),
        train: new FormControl(element.train)
      })))
    });


    // this.phatakForm.patchValue({
    //   phatakname: phatak.phatakName,
    //   inchargename: phatak.inchargeName,
    //   inchargephone: phatak.inchargePhone,
    //   latitude: phatak.location[0],
    //   longitude: phatak.location[1],
    //   phatakimage: phatak.phatakImage,
    //   phatakId: phatak.phatakId,
    //   status: phatak.status,
    // });

    // phatak.timings.forEach(element => {
    //   // console.log(element);
    //   this.getTimingsArrayFromPhatakForm().push(new FormGroup({
    //     time: new FormControl(datepipe.transform(element.time.toDate(), 'yyyy-MM-dd HH:mm')),
    //     trafficStatus: new FormControl(element.trafficStatus),
    //     train: new FormControl(element.train)
    //   }))
    // });
  }

  deletePhatak(phatakId: string) {
    let docRef = doc(this.firestore, "crossings/" + phatakId);
    deleteDoc(docRef).then(() => {
      console.log("Delete Successfully");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  checkValidity(input:any) {
		return this.phatakForm.get(input)?.invalid && this.phatakForm.get(input)?.dirty || this.phatakForm.get(input)?.touched;
	}

  selectImage(event) {
		// console.log(">>> Files: ", event.target.files);
		this.tempImage = event.target.files[0];
	}

  input(input:any) {
    // this.phatakForm.get('location'['latitude'])
		return this.phatakForm.get(input);
	}
  

}

