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

function LogInPage({ navigation }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [token, setToken] = useState("");

	useEffect(() => {
		if (loading) {
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

	const formSuccess = (data) => {
		setToken(data.token);
		setLoggedIn(true);
		setLoading(false);
		setUsername("");
		setPassword("");
		navigation.navigate("Newsfeed");
	};

	const formError = (data) => {
		const regex = /<[^>]*>/g;
		setLoading(false);
		setPassword("");
		// data?.message ? setError(data.message.replaceAll(regex, "")) : "";
		console.log(data);
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
						<Image
							source={{ uri: "https://i.pravatar.cc/300" }}
							style={{ height: "10%", width: "100%" }}
						/>
					</View>
				</View>
				<View style={styles.LogInBorder}>
					{loggedIn ? (
						<View>
							<Text>Logged In</Text>
						</View>
					) : (
						<View>
							{/* <Text style={{ fontWeight: "bold" }}>Login</Text> */}
							<Text h3 style={styles.bodyText}>
								Login
							</Text>
							<View style={styles.inputView}>
								<Text>Username:</Text>
								<TextInput
									style={styles.input}
									value={username}
									onChangeText={setUsername}
									onSubmitEditing={onFormSubmit}
								/>
								</View>
								<View style={styles.inputView}>
								<Text>Password:</Text>
								<TextInput
									// style={styles.input}
									value={password}
									onChangeText={setPassword}
									onSubmitEditing={onFormSubmit}
									secureTextEntry={true}
								/>
								</View>
								<TouchableOpacity>
								<Button onPress={onFormSubmit} title="Login" />
								<Text>{loading && "Loading"}</Text>
								<Text>{error}</Text>
								{/* <Text style={styles.bodyText}>Submit</Text> */}
							</TouchableOpacity>
						</View>
					)}
					<TouchableOpacity>
						<Text style={styles.forgot_button} style={styles.bodyText}>
							Forgot Password?{" "}
							<Text
								name="ResetPasswordPage"
								onPress={() => navigation.navigate("ResetPasswordPage")}
							>
								Click here.
							</Text>
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
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
		backgroundColor: "#fff",
		height: "70%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		flexDirection: "row",
		margin: 20,
		padding: 40,
	},
	bodyText: {
		color: "#1722e8",
	},
	LogInBorder: {
		borderStyle: "solid",
		borderRadius: 50,
		backgroundColor: "#fff",
		width: "50%",
		height: "100%",
		color: "#e9e9f5",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginHorizontal: 10,
		paddingTop: 20,
		paddingBottom: 10,
	},
	ImageBorder: {
		// border: "solid",
		borderRadius: 50,
		backgroundColor: "#fff",
		width: "40%",
		height: "80%",

		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 20,
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
	},
	loginBtn: {
		width: "20%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		marginBottom: 10,
		backgroundColor: "#87cefa",
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
