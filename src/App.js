import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

// example loggedInUserData
// {
// 	"token": "random.characters.string",
// 	"user_display_name": "Iron Man",
// 	"user_email": "me@marvelspace.com",
// 	"user_nickname": "ironmann",
//  "id": "5"
// }

export default function App() {
	const [loggedInUserData, setLoggedInUserData] = useState({});

	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="LogInPage"
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="LogInPage">
						{ props => <LogInPage {...props} setLoggedInUserData={setLoggedInUserData} /> }
					</Stack.Screen>
					{/* <Stack.Screen name="Home" component={Home} /> */}
					<Stack.Screen name="Newsfeed">
						{ props => <Newsfeed {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="SignUpPage" component={SignUpPage} />
					<Stack.Screen name="Friends">
						{ props => <Friends {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Profile">
						{ props => <Profile {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Images">
						{ props => <Images {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Message">
						{ props => <Message {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Find">
						{ props => <Find {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen
						name="ResetPasswordPage"
						component={ResetPasswordPage}
					/>
					<Stack.Screen name="EditProfile">
						{ props => <EditProfile {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Terms">
						{ props => <Terms {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Contact">
						{ props => <Contact {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="About">
						{ props => <About {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
					<Stack.Screen name="Rule">
						{ props => <Rule {...props} loggedInUserData={loggedInUserData} /> }
					</Stack.Screen>
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
