import React from "react";
import {
	StyleSheet,

	Text,
	View,
	TouchableHighlight,
	Linking,
} from "react-native";

function Footer() {
	return (
		<TouchableHighlight style={styles.bottomTouchableHighlight}>
			<View style={styles.footer}>
				
				<Text
					style={styles.footerTextSelect}
					style={styles.footerText}
					onPress={() => Linking.openURL("#")}
				>
					Brought to you by Team Black Panther.
				</Text>

				<Text style={styles.footerText} onPress={() => Linking.openURL("#")}>
					About{" "}
				</Text>

				<Text style={styles.footerText} onPress={() => Linking.openURL("#")}>
					Rule
				</Text>

				<Text style={styles.footerText} onPress={() => Linking.openURL("#")}>
					Contact
				</Text>

				<Text style={styles.footerText} onPress={() => Linking.openURL("#")}>
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
