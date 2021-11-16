import React from "react";
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ThemeLoggedOut from "./ThemeLoggedOut";
import { Text } from "react-native-elements";

function SignUpPage({ navigation }) {
  return (
		<ThemeLoggedOut navigation={navigation}>
			<View style={styles.body}>
				<View style={styles.LogInBorder}>
					<Text h3 style={styles.bodyText}>
						Sign Up
					</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="Email."
							placeholderTextColor="#000000"
							onChangeText={(email) => setEmail(email)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="Full Name"
							placeholderTextColor="#000000"
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="UserName"
							placeholderTextColor="#000000"
						/>
					</View>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="Password."
							placeholderTextColor="#000000"
							secureTextEntry={true}
							onChangeText={(password) => setPassword(password)}
						/>
					</View>

					<TouchableOpacity style={styles.loginBtn}>
						<Text style={styles.bodyText}>Submit</Text>
					</TouchableOpacity>
				</View>

				<Text onPress={() => navigation.goBack()}>Back to Logging Page</Text>
			</View>
		</ThemeLoggedOut>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#c5834c",

		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		backgroundColor: "#efd595",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		flexDirection: "row",
		margin: 20,
		padding: 40,
	},
	bodyText: {
		color: "#000000",
	},
	LogInBorder: {
		borderStyle: "solid",
		borderRadius: 50,
		backgroundColor: "#efd595",
		width: "60%",
		height: "90%",
		color: "#efd595",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginHorizontal: 10,
		paddingTop: 20,
	},

	header: {
		width: "100%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
	},
	footer: {
		width: "100%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
	},
	inputView: {
		width: "60%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#c5834c",
	},

	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	loginBtn: {
		width: "20%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#87cefa",
	},
});
export default SignUpPage;
