import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderLogPage from "./HeaderLogPage";
import Footer from "./Footer";

function SignUpPage() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<HeaderLogPage />
				</View>

				<View style={styles.body}>
					<Text style={styles.text}>
						Open up App.js to start working on your app!
					</Text>
				</View>

				<View>
					<Footer />
				</View>
			</ScrollView>
		</View>
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
		fontSize: "1.5em",
		fontWeight: 100,
		fontFamily: "Serif",
	},
});

export default SignUpPage;
