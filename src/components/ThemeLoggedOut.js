import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import HeaderLogPage from "./HeaderLogPage";
import Footer from "./Footer";

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
		paddingTop: 10,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: "#D3D3D3",
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
		fontSize: 24,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
	Header: {
		height: "15%",
		top: 0,
	},
	Footer: {
		height: "25%",
		bottom: 0,
	},
});
export default ThemeLoggedOut;
