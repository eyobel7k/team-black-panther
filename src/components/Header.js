import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

function Header({ navigation }) {
	return (
		<View style={styles.Header}>
			<TouchableHighlight>
				<View style={styles.HeaderTitle}>
					<Text style={styles.headerText}>Marvelspace a space</Text>
					<Text style={styles.headerText}>for super friends</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight>
				<View style={styles.HeaderBar}>	
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
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "blue",
		height: "4em",
		width: "100%",
	},
	HeaderTitle: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 30,
		width: '100%',
	},
	HeaderBar: {
		flexDirection: "row",
		backgroundColor: "skyblue",
		width: "100%",
		padding: 5,
		justifyContent: "space-around",
	},
	headerText: {
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
});
export default Header;
