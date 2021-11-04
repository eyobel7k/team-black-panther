import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header, Footer } from './';

function ThemeLoggedIn({ children, navigation }) {
	return (
		<View style={styles.container} navigation={navigation}>
			<View style={styles.Header}>
				<Header navigation={navigation} />
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
		height: "70%",
		paddingTop: 10,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: "lightGray",
		paddingVertical:70,
	
	},
	scrollContentContainer: {
		flexWrap: "wrap",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	text: {
		margin: 5,
		fontSize: "1.5em",
		fontWeight: 100,
		fontFamily: "Serif",
	},
	Header: {
		height: "20%",
		top: 0,
	},
	Footer: {
		height: "10%",
		bottom: 0,
		backgroundColor: "red",
		position: "fixed",
	},
});


export default ThemeLoggedIn;