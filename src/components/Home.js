import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";

function Home({ navigation }) {
  return (
    <ThemeLoggedIn navigation={navigation} style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </ThemeLoggedIn>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#c5834c",
	},
	body: {
		backgroundColor: "#c5834c",
		height: "80%",
		width: "100%",
	},
	text: {
		margin: 5,
		fontSize: 24,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
});

export default Home;
