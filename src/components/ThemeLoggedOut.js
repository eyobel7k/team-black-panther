import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import HeaderLogPage from "./HeaderLogPage";
import Footer from './Footer';

function ThemeLoggedOut({ children, navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.Header}>
				<HeaderLogPage navigation={navigation} />
			</View>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollContentContainer}
			>
				{children}
			</ScrollView>
			<View style={styles.Footer}>
				<Footer navigation={navigation} />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	scrollView: {
		height: "60%",
		// paddingTop: 10,
		borderWidth: 5,
		borderRadius: 5,
		borderColor: "yellow",
	},
	scrollContentContainer: {
		// flexWrap: "wrap",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	text: {
		margin: 5,
		fontSize: 1.5, // was '1.5em'
		fontWeight: "100",
		// fontFamily: "Serif",
	},
	Header: {
		height: "20%",
		top: 0,
	},
	Footer: {
		height: "20%",
		// bottom: 0,
		// position: "fixed",
	},
});
export default ThemeLoggedOut;