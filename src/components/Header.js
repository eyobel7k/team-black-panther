import React from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableHighlight,
} from "react-native";

import { Text, SearchBar } from "react-native-elements";
import welcomeImg from "../../assets/BlackPanther.png";
function Header({ navigation }) {

	return (
		<View style={styles.Header} navigation={navigation}>
			<TouchableHighlight navigation={navigation}>
				<View style={styles.HeaderWarp} navigation={navigation}>
					<Image
						source={welcomeImg}
						style={{ height: "90%", width: 150, paddingTop: 120, marginEnd: 0 }}
					/>
					
					<View style={styles.HeaderTitle}>
							<Text h3 style={styles.headerText}>
						marvelspace
					</Text>
					<Text h4 style={styles.headerText}>
						a space for super friends
					</Text>
					</View>

					{/* <View style={styles.HeaderSearch}>
						<SearchBar
							lightTheme={true}
							height={50}
							fontSize={24}
							fontColor="#fdfdfd"
							iconColor="#fdfdfd"
							shadowColor="#282828"
							cancelIconColor="#fdfdfd"
							backgroundColor="#ba312f"
							placeholder="Search  ..."
							// fontFamily="BurbankBigCondensed-Black"
						/>
					</View> */}
				</View>
			</TouchableHighlight>
			<TouchableHighlight>
				<View style={styles.HeaderBar} navigation={navigation}>
					<Text
						navigation={navigation}
						style={styles.headerText}
						name="Newsfeed"
						onPress={() => navigation.navigate("Newsfeed")}
					>
						Newsfeed
					</Text>

					<Text
						navigation={navigation}
						style={styles.headerText}
						name="Friends"
						onPress={() => navigation.navigate("Friends")}
					>
						Members
					</Text>

					<Text
						navigation={navigation}
						style={styles.headerText}
						name="Profile"
						onPress={() => navigation.navigate("Profile")}
					>
						Profile
					</Text>

					<Text
						navigation={navigation}
						style={styles.headerText}
						name="Image"
						onPress={() => navigation.navigate("Images")}
					>
						Images
					</Text>

					<Text
						navigation={navigation}
						style={styles.headerText}
						name="Message"
						onPress={() => navigation.navigate("Message")}
					>
						Messages
					</Text>

					<Text
						style={styles.headerText}
						navigation={navigation}
						name="Find"
						onPress={() => navigation.navigate("Find")}
					>
						Search
					</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	Header: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		backgroundColor: "#1a1a1a",
		// height: 100,
		// width: "100%",
	},
	HeaderTitle: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		// padding: 30,
		width: "50%",
	},
	HeaderBar: {
		flexDirection: "row",
		backgroundColor: "#c5834c",
		width: "100%",
		padding: 5,
		justifyContent: "space-around",
		marginBottom: 0,
	},
	headerText: {
		color: "#efd595",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
	// HeaderSearch: {
	// 	marginVertical: 30,

	HeaderWarp: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		alignItems: "flex-end",
		width: "100%",
		paddingTop: 10,
		// paddingBottom: 20,
	},
	bodyText: {
		color: "#efd595",
	},
	profileImage: {
		height: "10%",
		width: "10%",
		borderRadius: 5,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
});
export default Header;
