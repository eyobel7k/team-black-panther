import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import ThemeLoggedIn from "./ThemeLoggedIn";

function Rule({ navigation }) {
	return (
		<View style={styles.container} navigation={navigation}>
			<ScrollView>
				<View>
					<Header navigation={navigation} />
				</View>

				<View style={styles.body}>
					<Text style={styles.text}>Rule!</Text>
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

export default Rule;
