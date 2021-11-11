import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import Newsfeed from "./components/Newsfeed";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Images from "./components/Images";
import Message from "./components/Message";
import ResetPasswordPage from "./components/ResetPasswordPage";
import EditProfile from "./components/EditProfile";
import Terms from "./components/Terms";
import Rule from "./components/Rule";
import About from "./components/About";
import Contact from "./components/Contact";
import Find from "./components/Find";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Newsfeed"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LogInPage" component={LogInPage} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Newsfeed" component={Newsfeed} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Images" component={Images} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="Find" component={Find} />
          <Stack.Screen
            name="ResetPasswordPage"
            component={ResetPasswordPage}
          />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Rule" component={Rule} />
        </Stack.Navigator>
      </NavigationContainer>
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
