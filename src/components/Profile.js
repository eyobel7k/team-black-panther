import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	useWindowDimensions,
} from "react-native";
import { wpApiFetch, WPAPI_PATHS } from "../services/WPAPI";
import ThemeLoggedIn from "./ThemeLoggedIn";

const Profile = ({ navigation }) => {
	const [profileInfo, setProfileInfo] = useState({});
	const { height, width } = useWindowDimensions();
	useEffect(() => {
		wpApiFetch({ path: WPAPI_PATHS.wp.users }).then((response) => {
			setProfileInfo(response[0]);
		});
	}, []); // runs onMount only

  return (
    // <ThemeLoggedIn navigation={navigation}>
      <View style={styles.profileContainer}>
				<Image 
					source={{ uri: profileInfo.avatar_urls?.["96"] }} 
					style={{
						maxWidth: width > 300 ? 150 : 250,
						maxHeight: width > 300 ? 150: 250,
						height: '100%',
						width: '100%',
						borderRadius: 100, // was 100%
					}}
				/>
				<View style={styles.profileInfo}>
					<Text style={styles.h2}>{profileInfo.name}</Text>
					<Text style={styles.h3}>Avengers Tower, New York City</Text>
				</View>
				
				<TouchableOpacity
					style={styles.pillButton}
					name="EditProfile"
					onPress={() => navigation.navigate("EditProfile")}
				>
					<Text>edit profile</Text>
				</TouchableOpacity>

				<View style={styles.profileAboutContainer}>
					<Text style={styles.h3}>About</Text>
					<View style={styles.profileAbout}>
						<Text>{profileInfo.description}</Text>
					</View>
				</View>

      </View>
    // </ThemeLoggedIn>
  )
}

const styles = StyleSheet.create({
	profileContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		maxWidth: 300,
		// paddingVertical: '20%',
		// alignItems: "center",
		// flexWrap: "wrap",
	},
	profileInfo: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		minWidth: 300,
		// height: 300,
	},
	profileAboutContainer: {
		// flex: 1,
		// justifyContent: "space-around",
		// alignItems: "center",
		// margin: 20,
		// minWidth: 300,
	},
	profileAbout: {
		// flex: 1,
		// justifyContent: "space-around",
		// padding: 20,
		// margin: 20,
		// width: "100%",
		// height: 20,
		// borderRadius: 10,
		// borderWidth: 2,
		// borderColor: "gray",
		// backgroundColor: "whitesmoke",
	},
	pillButton: {
		// borderRadius: 10,
		// backgroundColor: "lightgray",
		// paddingHorizontal: 20,
		// paddingVertical: 4,
	},
	h2: {
		fontSize: 36, // was 'xx-large'
		fontWeight: "bold",
		color: "blue",
		// paddingTop: 20,
		// paddingHorizontal: "10%",
	},
	h3: {
		fontSize: 26, // was 'large'
		fontWeight: "bold",
		color: "gray",
		// padding: 10,
	},
});

export default Profile;
