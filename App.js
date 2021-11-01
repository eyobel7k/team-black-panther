import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Home, LogInPage, Profile, Footer } from "./components";


export default function App() {
	return (
    <View style={styles.container}>
      
      {/* <Home /> */}
      {/* <LogInPage/> */}
      <Profile />
			<StatusBar style="auto" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	
	},
});