import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { posts, users } from "./components/WPAPI";
import PasswordReset from "./components/PasswordReset";
import NewsFeed from "./components/NewsFeed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Header";
import Profile from "./components/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  // const BASE_URL = "https://jualuc1.dreamhosters.com/wp-json";

  // const posts = () => {
  //   return fetch(`${BASE_URL}/wp/v2/posts`)
  //     .then((response) => response.json())
  //     .then((data) => setOurPosts(data));
  //   console.log("I have populated ourPosts " + ourPosts);
  // };
  // const [ourPosts, setOurPosts] = useState("");
  // posts();
  // users();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <View style={styles.header}>
          <Header style={styles.header} />
        </View>
        <Stack.Navigator>
          <Stack.Screen
            name="PasswordReset"
            component={PasswordReset}
            options={{ title: "Password Reset" }}
          />
          <Stack.Screen
            name="NewsFeed"
            component={NewsFeed}
            options={{ title: "NewsFeed" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // display: "inline",

    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  // header: {
  //   flex: 1,
  //   flexDirection: "row",
  // },
});
