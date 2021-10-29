import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,View } from "react-native";
import { posts, users } from "./components/WPAPI";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";



export default function App() {
	posts();
	users();
	return (
    <View style={styles.container}>
      
      <Home />
      {/* <LogInPage/> */}
      
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