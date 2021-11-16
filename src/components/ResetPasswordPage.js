import React, { useState } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

import ThemeLoggedOut from "./ThemeLoggedOut";

function ResetPasswordPage({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, onChangeUsername] = useState("");
	const [newPassword, onChangeNewPassword] = useState("");
	const [confirmNewPassword, onChangeConfirmNewPassword] = useState("");

	function checkValidity() {
		if (confirmNewPassword !== newPassword) {
			console.log("Passwords do not match");
		} else if (confirmNewPassword.length > 0) {
			console.log("Password will be reset");
		} else {
			console.log("Invalid entry. Password cannot be blank");
		}
	}

	return (
		<ThemeLoggedOut navigation={navigation}>
			<View style={styles.body} navigation={navigation}>
				<View style={styles.LogInBorder}>
					<Text h4 style={styles.bodyText}>
						Password Reset
					</Text>
					<Text style={styles.bodyText}>Create your new password:</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="UserName"
							placeholderTextColor="#000000"
							value={username}
							onChangeText={onChangeUsername}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="New Password"
							placeholderTextColor="#000000"
							secureTextEntry={true}
							value={newPassword}
							onChangeText={onChangeNewPassword}
							// onChangeText={(password) => setPassword(password)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder="Confirm New Password"
							placeholderTextColor="#000000"
							secureTextEntry={true}
							value={confirmNewPassword}
							onChangeText={onChangeConfirmNewPassword}
							onSubmitEditing={checkValidity}
							// onChangeText={(password) => setPassword(password)}
						/>
					</View>

					<TouchableOpacity style={styles.loginBtn}>
						<Text style={styles.bodyText} onPress={checkValidity}>
							Submit
						</Text>
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
		backgroundColor: "#efd595",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		flex: 1,
		backgroundColor: "#efd595",
		width: "100%",
		textAlign: "center",
		justifyContent: "space-around",
		flexDirection: "column",
	},
	bodyText: {
		color: "#000000",
		alignSelf: "center",
	},
	LogInBorder: {
		backgroundColor: "#efd595",

		width: "100%",
		color: "#efd595",
		alignItems: "center",
		justifyContent: "space-around",
		paddingTop: 20,
		paddingBottom: 10,
		marginTop: 20,
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
	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		// marginLeft: 20,
		textAlign: "center",
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
export default ResetPasswordPage;
