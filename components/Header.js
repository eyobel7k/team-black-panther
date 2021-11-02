import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

function Header({ navigation }) {
	return (
		<View style={styles.Header} navigation={navigation}>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View style={styles.HeaderTitle}>
					<Text style={styles.headerText}>Marvelspace a space</Text>
					<Text style={styles.headerText}>for super friends</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.headerTouchableHighlight}
				navigation={navigation}
			>
				<View style={styles.HeaderBar} navigation={navigation}>
					
					<View>
						<Text
							style={styles.headerText}
							name="Newsfeed"
							onPress={() => navigation.navigate("Newsfeed")}
						>
							Newsfeed
						</Text>
					</View>
					
						<Text
							style={styles.headerText}
							name="Friends"
							onPress={() => navigation.navigate("Friends")}
						>
							Friends
						</Text>
					
					
						<Text
							style={styles.headerText}
							name="Profile"
							onPress={() => navigation.navigate("Profile")}
						>
							Profile
						</Text>
					
						<Text
							style={styles.headerText}
							name="Image"
							onPress={() => navigation.navigate("Images")}
						>
							Images
						</Text>
					
						<Text
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
		Position: "absolute",
		flexDirection: "column",
		top: 0,
		backgroundColor: "blue",
		height: "4em",
		width: "100%",
	},
	HeaderTitle: {
		flexDirection: "column",
		backgroundColor: "blue",
		width: "100%",
		justifyContent: "flex-start",
		alignItems: "start",
		padding: 10,
		paddingBottom: 15,
	},
	HeaderBar: {
		flexDirection: "row",
		justifyContent: "flex-end",

		backgroundColor: "skyblue",
		width: "100%",
		bottom: 0,
		padding: 5,
		justifyContent: "space-around",
		alignItems: "start",
	},

	headerTouchableHighlight: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	headerText: {
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
});
export default Header;
