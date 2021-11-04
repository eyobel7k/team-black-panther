import React from "react";
import {
	StyleSheet,

	Text,
	View,
	TouchableHighlight,
	Linking,
} from "react-native";

function Footer({ navigation }) {
	return (
		<TouchableHighlight
			style={styles.bottomTouchableHighlight}
			navigation={navigation}
		>
			<View style={styles.footer}>
				<Text
					style={styles.footerTextSelect}
					style={styles.footerText}
					onPress={() => Linking.openURL("#")}
				>
					Brought to you by Team Black Panther.
				</Text>

				<Text
					style={styles.footerText}
					name="About"
					onPress={() => navigation.navigate("About")}
				>
					About
				</Text>

				<Text
					style={styles.footerText}
					name="Rule"
					onPress={() => navigation.navigate("Rule")}
				>
					Rule
				</Text>

				<Text
					style={styles.footerText}
					name="Contact"
					onPress={() => navigation.navigate("Contact")}
				>
					Contact
				</Text>

				<Text
					style={styles.footerText}
					name="Terms"
					onPress={() => navigation.navigate("Terms")}
				>
					Terms
				</Text>

				<Text
					style={styles.footerTextSelect}
					style={styles.footerText}
					onPress={() => Linking.openURL("#")}
				>
					©2021 MarvelSpace.All Rights Reserved.
				</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	bottomTouchableHighlight: {
		flex: 1,
		bottom: 0,
		backgroundColor: "#e9e9f5",
	},
	footer: {
		flex: 2,
		flexDirection: "row",
		// backgroundColor: "black",
		width: "100%",
		height: "20%",
		justifyContent: "space-around",
		alignItems: "center",
	},

	footerText: {
		color: "#6c72d9",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
	footerTextSelect: {
		color: "#6d6f91",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 10,
	},
});
export default Footer;
