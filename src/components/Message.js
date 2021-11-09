import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import Chat from "./Chat";

function Messages({ navigation }) {
	return (
		<ThemeLoggedIn navigation={navigation}>
			<View style={styles.container} navigation={navigation}>
				<View style={styles.body} navigation={navigation}>
					<Text style={styles.text}>
						<Chat />
					</Text>
				</View>
			</View>
		</ThemeLoggedIn>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	body: {
		backgroundColor: "#fff",
		height: "60%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: 24,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
});

export default Messages;
