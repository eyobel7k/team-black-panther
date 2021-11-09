import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import ThemeLoggedOut from "./ThemeLoggedOut";

function Terms({ navigation }) {
	return (
		<ThemeLoggedOut navigation={navigation}>
			<View style={styles.body} navigation={navigation}>
				<Text style={styles.text}>Terms!</Text>
			</View>

			<Text onPress={() => navigation.goBack()}>Back to Logging Page</Text>
		</ThemeLoggedOut>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	body: {
		backgroundColor: "#fff",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: 15,
		fontWeight: "100",
		fontFamily: "Serif",
	},
});

export default Terms;
