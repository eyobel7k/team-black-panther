import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function ThemeLoggedIn({ children, navigation }) {
	return (
		<View style={styles.container}>
				<View>
					<Header navigation={navigation} />
				</View>
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={styles.scrollContentContainer}
				>
					{children}
				</ScrollView>
				<View>
					<Footer />
				</View>
		</View>
	);
}
const styles = StyleSheet.create({
	scrollView: {
		paddingTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'lightgray',
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
});


export default ThemeLoggedIn;