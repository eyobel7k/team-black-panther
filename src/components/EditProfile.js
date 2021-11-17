import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { wpApiFetch, WPAPI_PATHS } from "../services/WPAPI";
import ThemeLoggedIn  from "./ThemeLoggedIn";

const EditProfile = ({ navigation }) => {
  const [profileInfo, setProfileInfo] = useState([]);

	useEffect(() => {
		// https://developer.wordpress.org/rest-api/reference/users/#update-a-user
		wpApiFetch({ path: WPAPI_PATHS.wp.posts }).then((response) => {
			setProfileInfo(response[0].content.rendered);
		});
	});
	return (
		<ThemeLoggedIn navigation={navigation}>
			<View style={styles.container}>
				<View style={styles.body}>
					<View style={styles.ImageBorder}>
						<Image
							source={{ uri: "https://i.pravatar.cc/300" }}
							style={{ height: "60%", width: "50%", borderRadius: 10 }}
						/>
						<Text>MarvelSpace Tom!</Text>
						<Text>Avengers Tower, New York City</Text>
						<View style={styles.pillButton}>
							<Text>edit profile</Text>
						</View>
					</View>
					<View style={styles.LogInBorder}>
						<View>
							<Text h3 style={styles.bodyText}>
								Edit Profile
							</Text>
						</View>
						<View style={styles.inputView}>
							<Text style={styles.bodyText}>Edit Name</Text>
							<TextInput
								style={styles.TextInput}
								placeholder=""
								placeholderTextColor="#000000"
							/>
						</View>
						<View style={styles.inputView}>
							<Text style={styles.bodyText}>Edit City</Text>
							<TextInput
								style={styles.TextInput}
								placeholder=""
								placeholderTextColor="#000000"
							/>
						</View>
						<View style={styles.inputView}>
							<Text style={styles.bodyText}>Edit About</Text>
							<TextInput
								style={styles.TextInput}
								placeholder=""
								placeholderTextColor="#000000"
							/>
						</View>
						<TouchableOpacity style={styles.loginBtn}>
							<Text style={styles.bodyText}>Submit</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View />
			</View>
		</ThemeLoggedIn>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	body: {
		backgroundColor: "#efd595",
		height: "100%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	bodyText: {
		color: "#000000",
	},
	LogInBorder: {
		borderRadius: 50,
		backgroundColor: "#efd595",
		width: "50%",
		height: "80%",
		color: "#efd595",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginHorizontal: 10,
		paddingTop: 20,
	},
	ImageBorder: {
		borderStyle: "solid",
		borderRadius: 50,
		backgroundColor: "#efd595",
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
		width: "70%",
		borderRadius: 10,
		height: 20,
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
		marginTop: 30,
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

export default EditProfile;
