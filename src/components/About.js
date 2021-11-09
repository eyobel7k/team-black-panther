import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import ThemeLoggedIn from "./ThemeLoggedIn";

function About({ navigation }) {
  return (
    <ThemeLoggedIn navigation={navigation}>
      <View style={styles.body}>
        <Text style={styles.text}>About!</Text>
      </View>
    </ThemeLoggedIn>
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
    fontSize: 15,
    fontWeight: "100",
    fontFamily: "Serif",
  },
});

export default About;
