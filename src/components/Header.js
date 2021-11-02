import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";



function Header() {
	
	return (
		<View style={styles.Header}>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View style={styles.HeaderTitle}>
					<Text style={styles.headerText}>Marvelspace a space</Text>
					<Text style={styles.headerText}>for super friends</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View style={styles.HeaderBar}>  
					 <Text style={styles.headerText}>Newsfeed</Text>
					<Text style={styles.headerText}>Friends</Text>
					<Text style={styles.headerText}>Profile</Text>
					<Text style={styles.headerText}>Images</Text>
					<Text style={styles.headerText}>Messages</Text>
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
