import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Image,
	View,
	TextInput,
	TouchableOpacity,
	Button,
} from "react-native";
import ThemeLoggedOut from "./ThemeLoggedOut";
import { Text } from "react-native-elements";
import welcomeImg from "../../assets/marvelspace_login.png";

// example response
// {
// 	"token": "random.characters.string",
// 	"user_display_name": "Iron Man",
// 	"user_email": "me@marvelspace.com",
// 	"user_nickname": "ironmann",
// }

function LogInPage({ navigation }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [token, setToken] = useState("");

	useEffect(() => {
		if (loading) {
			// for demo purposes, will delete afterwards
			if (username === "user" && password === "pass") {
				new Promise((resolve) =>
					setTimeout(
						() =>
							resolve({
								token: "random.characters.string",
								user_display_name: "Iron Man",
								user_email: "me@marvelspace.com",
								user_nickname: "ironmann",
							}),
						2000
					)
				).then(formSuccess);
				return;
			}
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: `${username}`,
					password: `${password}`,
				}),
			};

			fetch(
				`https://jualuc1.dreamhosters.com/wp-json/jwt-auth/v1/token`,
				options
			)
				.then((response) => response.json())
				.then((data) => {
					data.token ? formSuccess(data) : formError(data);
				});
		}
	}, [loading]);

	const onFormSubmit = () => {
		setError("");
		setLoading(true);
	};

	const formSuccess = (response) => {
		setToken(response.token);
		setLoggedIn(true);
		setLoading(false);
		setUsername("");
		setPassword("");
		navigation.navigate("Newsfeed", { ...response });
	};

	const formError = (response) => {
		const regex = /<[^>]*>/g;
		setLoading(false);
		setPassword("");
		setError(
			response.message
				? response.message.replace(regex, "")
				: "An error has occurred!"
		);
	};
	return (
		<ThemeLoggedOut navigation={navigation}>
			<View style={styles.body} navigation={navigation}>
				{/* <Text
					navigation={navigation}
					style={styles.headerText}
					name="Newsfeed"
					onPress={() => navigation.navigate("Newsfeed")}
				>
					Newsfeed
				</Text> */}
				<View style={styles.ImageBorder}>
					<Text h2 style={styles.bodyText}>
						Join the fun ..
					</Text>
					<View style={styles.imageContainer}>
						<Image source={welcomeImg} style={{ height: 350, width: 350 }} />
					</View>
				</View>
				<View style={styles.LogInBorder}>
					{loggedIn ? (
						<View>
							<Text> Logged In </Text>
						</View>
					) : (
						<View>
							{/* <Text style={{ fontWeight: "bold" }}>Login</Text> */}
							<Text h3 style={styles.bodyText}>
								Login
							</Text>
							<View style={styles.inputView}>
								<Text>  Username  </Text>
								<TextInput
									style={styles.input}
									value={username}
									onChangeText={setUsername}
									onSubmitEditing={onFormSubmit}
								/>
							</View>
							<View style={styles.inputView}>
								<Text> Password </Text>
								<TextInput
									// style={styles.input}
									value={password}
									onChangeText={setPassword}
									onSubmitEditing={onFormSubmit}
									secureTextEntry={true}
								/>
							</View>
							<TouchableOpacity style={styles.bodyText}>
								<Button onPress={onFormSubmit} title="Login" />
								<Text>{loading && "Loading"}</Text>
								<Text>{error}</Text>
								{/* <Text style={styles.bodyText}>Submit</Text> */}
							</TouchableOpacity>
						</View>
					)}
					<TouchableOpacity style={styles.forgot_button}>
						<Text style={styles.forgot_button} style={styles.bodyText}>
							Forgot Password?
							<Text
								name="ResetPasswordPage"
								onPress={() => navigation.navigate("ResetPasswordPage")}
							>
								Click here.
							</Text>
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.forgot_button}>
						<Text style={styles.forgot_button} style={styles.bodyText}>
							Don't have an account?
							<Text
								name="SignUpPage"
								onPress={() => navigation.navigate("SignUpPage")}
							>
								Sign Up
							</Text>
							here.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ThemeLoggedOut>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		flex: 1,
		backgroundColor: "#fff",
		width: "100%",
		textAlign: "center",
		justifyContent: "space-around",
		flexDirection: "column",
	},
	bodyText: {
		color: "#1722e8",
		alignSelf: "center",
	},
	LogInBorder: {
		backgroundColor: "#fff",

		width: "100%",
		color: "#e9e9f5",
		alignItems: "center",
		justifyContent: "space-around",
		paddingTop: 20,
		paddingBottom: 10,
		marginTop: 20,
	},
	ImageBorder: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginHorizontal: 10,
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
		width: "100%",
		borderRadius: 10,
		height: 50,
		// alignItems: "center",
		// justifyContent: "center",
		marginTop: 20,
		marginBottom: 10,
		backgroundColor: "#e9e9f5",
	},

	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
		alignItems: "center",
	},

	forgot_button: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		paddingTop: 10,
		paddingBottom: 10,
	},

	imageContainer: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "100%",
		margin: 10,
	},
});
export default LogInPage;
