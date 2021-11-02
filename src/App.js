import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from 'expo';
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

/**
 * because we moved App.js into src, we need to registerRootComponent(App)
 * we also need to change "main" in package.json to src/App.js
 */
registerRootComponent(App);