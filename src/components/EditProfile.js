import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native-elements";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { wpApiFetch, WPAPI_PATHS } from "../services/WPAPI";
import ThemeLoggedIn  from "./ThemeLoggedIn";

const EditProfile = ({ navigation, route, loggedInUserData }) => {
	const { name, description } = route.params;
	const [newName, setNewName] = useState(name);
	const [newDescription, setNewDescription] = useState(description);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState("");

	useEffect(() => {
		// https://developer.wordpress.org/rest-api/reference/users/#update-a-user
		if (loading) {
			const newProfileInfo = {
				id: loggedInUserData.id,
				name: newName,
				description: newDescription,
			};
			const options = {
				path: `${WPAPI_PATHS.wp.users}/${loggedInUserData.id}`,
				method: 'POST',
				data: newProfileInfo,
				token: loggedInUserData.token 
			};
			wpApiFetch(options).then(response => {
				setStatus('Success!');
			})
			.catch(error => {
				setStatus(error.message)
			})
			.finally(() => {
				setLoading(false)
			})
		}
	}, [loading]);
	return (
		<ThemeLoggedIn navigation={navigation} loggedInUserData={loggedInUserData}>
			<View style={styles.container}>
				<View style={styles.body}>
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
								value={newName}
								placeholderTextColor="#000000"
								onChangeText={text => setNewName(text)}
							/>
						</View>
						<View style={styles.inputView}>
							<Text style={styles.bodyText}>Edit About</Text>
							<TextInput
								style={styles.TextInput}
								value={description}
								multiline={true}
								numberOfLines={4}
								placeholderTextColor="#000000"
								onChangeText={text => setNewDescription(text)}
							/>
						</View>
						<TouchableOpacity>
							<Button onPress={() => setLoading(true)} title={loading ? 'Loading...' : 'Submit'} />
							<Text styles={styles.TextInput}>{status && status}</Text>
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
	inputView: {
		width: '100%',
		minWidth: "50%",
		borderRadius: 10,
		justifyContent: "center",
		marginTop: 40,
		paddingVertical: 20,
		backgroundColor: "#c5834c",
	},
	TextInput: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
	},
	loginBtn: {
		minWidth: "20%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		backgroundColor: "#87cefa",
	},
});

export default EditProfile;
