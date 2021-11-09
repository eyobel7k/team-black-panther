import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import { Text, SearchBar } from "react-native-elements";

function Header({ navigation }) {
	

	return (
		<View style={styles.Header} navigation={navigation}>
			<TouchableHighlight navigation={navigation}>
				<View style={styles.HeaderWarp} navigation={navigation}>
					{/* <View style={styles.HeaderTitle}> */}
						<Text h3 style={styles.HeaderSearch}>
							MarvelSpace
						</Text>
						<Text h4 style={styles.headerText}>
							A space for super friends
						</Text>
					{/* </View> */}
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
						Friends
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
				</View>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	Header: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "#0000FF",
		height: 100,
		width: "100%",
	},
	HeaderTitle: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 30,
		// width: "50%",
	},
	HeaderBar: {
		flexDirection: "row",
		backgroundColor: "#87cefa",
		width: "100%",
		padding: 5,
		justifyContent: "space-around",
	},
	headerText: {
		color: "#fff",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
	HeaderSearch: {
		marginVertical: 30,
	},
	HeaderWarp: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		alignItems: "flex-end",
		width: "100%",
		// paddingBottom:20,
	},
	bodyText: {
		color: "#1722e8",
	},
});
export default Header;
