import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderLogPage from "./HeaderLogPage";
import Footer from "./Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "./SignUpPage";


function LogInPage() {
	const Stack = createNativeStackNavigator();

	function Nav() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="LogInPage">
					<Stack.Screen name="LogInPage" component={LogInPage} />
					<Stack.Screen name="SignUpPage" component={SignUpPage} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<HeaderLogPage />
				</View>

				<View style={styles.body}>
					<Text name="SignUpPage">Sign Up</Text>
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

export default LogInPage;
