import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
	Roboto_400Regular
} from "@expo-google-fonts/dev";

export default function App (){

	let [fontsLoaded] = useFonts({
		'Roboto': Roboto_400Regular,
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._iPhone_11_Pro_Max___1}>
			<View style = {[stylesheet._John_Watson, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[ {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				John Watson
			</Text>
			</View>
			<View style = {[stylesheet._Frontend_Developer_with_2_years_experience, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[{position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Frontend Developer with 2 years experience
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_1}>
			</View>
			<View style = {[stylesheet._Followers_Following_Articles, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[{position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Followers         Following          Articles
			</Text>
			</View>
			<View style = {[stylesheet._120_50_10, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[ {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				     120                     50                     10
			</Text>
			</View>
			<View style = {[stylesheet._Explore_more_articles, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[ {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Explore more articles
			</Text>
			</View>
			<View style = {stylesheet._Rectangle_2}>
			</View>
			<View style = {[stylesheet._Explore_Now, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[{position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Explore Now
			</Text>
			</View>
			<View style = {stylesheet._Ellipse_1}>
			</View>
			<View style = {stylesheet._Ellipse_2}>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_iPhone_11_Pro_Max___1: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 871,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	_John_Watson: {
		position: "absolute",
		width: 196,
		height: 31,
		left: 136,
		right: "auto",
		top: 294,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 25,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Frontend_Developer_with_2_years_experience: {
		position: "absolute",
		width: 399,
		height: 31,
		left: 25,
		right: "auto",
		top: 339,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 0.5899999737739563)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_1: {
		position: "absolute",
		width: 349,
		height: 174,
		borderRadius: 0,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 1)",
		left: 30,
		right: "auto",
		top: 384,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		backgroundColor: "rgba(64, 176, 82, 1)",
	},
	_Followers_Following_Articles: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 55,
		right: "auto",
		top: 401,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(11, 39, 16, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_120_50_10: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 50,
		right: "auto",
		top: 430,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(46, 97, 54, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Explore_more_articles: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 118,
		right: "auto",
		top: 471,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(11, 46, 17, 0.7200000286102295)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_2: {
		position: "absolute",
		width: 227,
		height: 31,
		borderRadius: 50,
		opacity: 1,
		left: 93,
		right: "auto",
		top: 506,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 141, 22, 1)",
	},
	_Explore_Now: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 154,
		right: "auto",
		top: 510,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Ellipse_1: {
		position: "absolute",
		width: 295,
		height: 257,
		borderRadius: 1000,
		backgroundColor: "rgba(64, 176, 82, 0.28999999165534973)",
		left: -31,
		right: "auto",
		top: -129,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Ellipse_2: {
		position: "absolute",
		width: 281,
		height: 292,
		borderRadius: 1000,
		backgroundColor: "rgba(64, 176, 82, 0.28999999165534973)",
		left: -145,
		right: "auto",
		top: -64,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
});

// import React from "react";
// import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
// import { Svg, Path } from "react-native-svg";

// import {
// useFonts,
// 	Roboto_400Regular
// } from "@expo-google-fonts/dev";


// import React from "react";
// import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
// import { Svg, Path } from "react-native-svg";

// import {
// useFonts,
// 	Roboto_400Regular
// } from "@expo-google-fonts/dev";

// export default function App (){

// 	let [fontsLoaded] = useFonts({
// 		'Roboto': Roboto_400Regular,
// 	});

// 	return (
// 		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
// 		<View style = {stylesheet._iPhone_11_Pro_Max___1}>
// 			<View style = {[stylesheet._John_Watson, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._John_Watson, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				John Watson
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._Frontend_Developer_with_2_years_experience, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Frontend_Developer_with_2_years_experience, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Frontend Developer with 2 years experience
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Rectangle_1}>
// 			</View>
// 			<View style = {[stylesheet._Followers_Following_Articles, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Followers_Following_Articles, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Followers         Following          Articles
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._120_50_10, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._120_50_10, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				     120                     50                     10
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._Explore_more_articles, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Explore_more_articles, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Explore more articles
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Rectangle_2}>
// 			</View>
// 			<View style = {[stylesheet._Explore_Now, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Explore_Now, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Explore Now
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Ellipse_1}>
// 			</View>
// 			<View style = {stylesheet._Ellipse_2}>
// 			</View>
// 		</View>
// 		</ScrollView>
// 	)
// }

// const stylesheet = StyleSheet.create({
// 	_iPhone_11_Pro_Max___1: {
// 		position: "relative",
// 		width: Dimensions.get("window").width,
// 		height: 871,
// 		borderRadius: 0,
// 		overflow: "hidden",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(255, 255, 255, 1)",
// 		left: 0,
// 		top: 0,
// 	},
// 	_John_Watson: {
// 		position: "absolute",
// 		width: 196,
// 		height: 31,
// 		left: 136,
// 		right: "auto",
// 		top: 294,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 25,
// 		color: "rgba(0, 0, 0, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Frontend_Developer_with_2_years_experience: {
// 		position: "absolute",
// 		width: 399,
// 		height: 31,
// 		left: 25,
// 		right: "auto",
// 		top: 339,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(0, 0, 0, 0.5899999737739563)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Rectangle_1: {
// 		position: "absolute",
// 		width: 349,
// 		height: 174,
// 		borderRadius: 0,
// 		opacity: 1,
// 		borderWidth: 1,
// 		borderColor: "rgba(0, 0, 0, 1)",
// 		left: 30,
// 		right: "auto",
// 		top: 384,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		shadowColor: "rgb(0, 0, 0)",
// 		shadowOffset: {
// 			width: 0,
// 			height: 4,
// 		},
// 		shadowOpacity: 0.25,
// 		shadowRadius: 4,
// 		backgroundColor: "rgba(64, 176, 82, 1)",
// 	},
// 	_Followers_Following_Articles: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 55,
// 		right: "auto",
// 		top: 401,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(11, 39, 16, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_120_50_10: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 50,
// 		right: "auto",
// 		top: 430,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(46, 97, 54, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Explore_more_articles: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 118,
// 		right: "auto",
// 		top: 471,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(11, 46, 17, 0.7200000286102295)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Rectangle_2: {
// 		position: "absolute",
// 		width: 227,
// 		height: 31,
// 		borderRadius: 50,
// 		opacity: 1,
// 		left: 93,
// 		right: "auto",
// 		top: 506,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(0, 141, 22, 1)",
// 	},
// 	_Explore_Now: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 154,
// 		right: "auto",
// 		top: 510,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Ellipse_1: {
// 		position: "absolute",
// 		width: 295,
// 		height: 257,
// 		borderRadius: 1000,
// 		backgroundColor: "rgba(64, 176, 82, 0.28999999165534973)",
// 		left: -31,
// 		right: "auto",
// 		top: -129,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 	},
// 	_Ellipse_2: {
// 		position: "absolute",
// 		width: 281,
// 		height: 292,
// 		borderRadius: 1000,
// 		backgroundColor: "rgba(64, 176, 82, 0.28999999165534973)",
// 		left: -145,
// 		right: "auto",
// 		top: -64,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 	},
// });

// export default function App (){

// 	let [fontsLoaded] = useFonts({
// 		'Roboto': Roboto_400Regular,
// 	});

// 	return (
// 		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
// 		<View style = {stylesheet._iPhone_11_Pro_Max___1}>
// 			<View style = {[stylesheet._John_Watson, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[ {fontWeight: "500" ,position: "relative", flexGrow: 1, left: 5, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				John Watson
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._Frontend_Developer_with_2_years_experience, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[{position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Frontend Developer with 2 years experience
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Rectangle_1}>
// 			</View>
// 			<View style = {[stylesheet._Followers_Following_Articles, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[{position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Followers         Following          Articles
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._120_50_10, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[ {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				     120                     50                     10
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._Explore_more_articles, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[ {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Explore more articles
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Rectangle_2}>
// 			</View>
// 			<View style = {[stylesheet._Explore_Now, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[{position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Explore Now
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Ellipse_1}>
// 			</View>
// 			<View style = {stylesheet._Ellipse_2}>
// 			</View>
// 		</View>
// 		</ScrollView>
// 	)
// }

// const stylesheet = StyleSheet.create({
// 	_iPhone_11_Pro_Max___1: {
// 		position: "relative",
// 		width: Dimensions.get("window").width,
// 		height: 871,
// 		borderRadius: 0,
// 		overflow: "hidden",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(255, 255, 255, 1)",
// 		left: 0,
// 		top: 0,
// 	},
// 	_John_Watson: {
// 		position: "absolute",
// 		width: 196,
// 		height: 31,
// 		left: 136,
// 		right: "auto",
// 		top: 294,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 25,
// 		color: "rgba(0, 0, 0, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Frontend_Developer_with_2_years_experience: {
// 		position: "absolute",
// 		width: 399,
// 		height: 31,
// 		left: 25,
// 		right: "auto",
// 		top: 339,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(0, 0, 0, 0.5899999737739563)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Rectangle_1: {
// 		position: "absolute",
// 		width: 349,
// 		height: 174,
// 		borderRadius: 0,
// 		opacity: 1,
// 		borderWidth: 1,
// 		borderColor: "rgba(0, 0, 0, 1)",
// 		left: 30,
// 		right: "auto",
// 		top: 384,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		shadowColor: "rgb(0, 0, 0)",
// 		shadowOffset: {
// 			width: 0,
// 			height: 4,
// 		},
// 		shadowOpacity: 0.25,
// 		shadowRadius: 4,
// 		backgroundColor: "rgba(64, 176, 82, 1)",
// 	},
// 	_Followers_Following_Articles: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 55,
// 		right: "auto",
// 		top: 401,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(11, 39, 16, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_120_50_10: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 50,
// 		right: "auto",
// 		top: 430,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(46, 97, 54, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Explore_more_articles: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 118,
// 		right: "auto",
// 		top: 471,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(11, 46, 17, 0.7200000286102295)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Rectangle_2: {
// 		position: "absolute",
// 		width: 227,
// 		height: 31,
// 		borderRadius: 50,
// 		opacity: 1,
// 		left: 93,
// 		right: "auto",
// 		top: 506,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(0, 141, 22, 1)",
// 	},
// 	_Explore_Now: {
// 		position: "absolute",
// 		width: "auto",
// 		height: "auto",
// 		left: 154,
// 		right: "auto",
// 		top: 510,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 18,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Ellipse_1: {
// 		position: "absolute",
// 		width: 295,
// 		height: 257,
// 		borderRadius: 1000,
// 		backgroundColor: "rgba(64, 176, 82, 0.28999999165534973)",
// 		left: -31,
// 		right: "auto",
// 		top: -129,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 	},
// 	_Ellipse_2: {
// 		position: "absolute",
// 		width: 281,
// 		height: 292,
// 		borderRadius: 1000,
// 		backgroundColor: "rgba(64, 176, 82, 0.28999999165534973)",
// 		left: -145,
// 		right: "auto",
// 		top: -64,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 	},
// });
