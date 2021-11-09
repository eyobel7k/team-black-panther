import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import ThemeLoggedOut from "./ThemeLoggedOut";

function Rule({ navigation }) {
	return (
		<ThemeLoggedOut navigation={navigation}>
			<view>
				<View style={styles.body} navigation={navigation}>
					<Text style={styles.text}>Rule!</Text>
				</View>

				<Text onPress={() => navigation.goBack()}>Back to Logging Page</Text>
			</view>
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
		fontSize: 1.5, // was '1.5em'
		fontWeight: "100",
		// fontFamily: "Serif",
	},
});

export default Rule;
