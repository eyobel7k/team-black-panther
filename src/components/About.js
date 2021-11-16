import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";

function About({ navigation }) {
	return (
		<ThemeLoggedIn navigation={navigation}>
			<View style={styles.body} navigation={navigation}>
				<Text style={styles.text}>About!</Text>
			</View>
		</ThemeLoggedIn>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#efd595",
	},
	body: {
		backgroundColor: "#efd595",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: 30,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
});

export default About;
