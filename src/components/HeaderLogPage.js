import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

function HeaderLogPage() {
	return (
		<View style={styles.Header}>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View style={styles.HeaderTitle}>
					<Text style={styles.headerText}>Marvelspace a space</Text>
					<Text style={styles.headerText}>for super friends</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View></View>
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
		padding: 15,
		paddingBottom: 20,
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
export default HeaderLogPage;
