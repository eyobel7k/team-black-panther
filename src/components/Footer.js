import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

function Footer() {
	return (
		
		<TouchableHighlight style={styles.bottomTouchableHighlight}>
			<View style={styles.footer}>
				<Text style={styles.footerTextSelect}>
					Brought to you by Team Black Panther.
				</Text>

				<Text style={styles.footerText}>About</Text>

				<Text style={styles.footerText}>Rule</Text>

				<Text style={styles.footerText}>Contact</Text>

				<Text style={styles.footerText}>Terms</Text>

				<Text style={styles.footerTextSelect}>
					©2021 MarvelSpace.All Rights Reserved.
				</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	bottomTouchableHighlight: {
		flex: 1,
		flexDirection: "row",
		position: "fixed",
		bottom: 0,
		backgroundColor: "grey",
		alignItems: "center",
		justifyContent: "center",
		height: "4em",
		width: "100%",
		
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",

		// backgroundColor: "black",
		width: "100%",
		bottom: 0,
		paddingBottom: "0",
		justifyContent: "space-around",
		alignItems: "start",

		
	},
	
	
	footerText: {
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
	footerTextSelect: {
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 10,
	},
});
export default Footer;
