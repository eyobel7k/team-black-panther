import React from "react";
import { StyleSheet,  View, TouchableHighlight } from "react-native";
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text } from "react-native-elements";

function HeaderLogPage() {
	const [fontLoaded] = useFonts({ BebasNeue_400Regular });
	return (
		<View style={styles.Header}>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View style={styles.HeaderTitle}>
					<Text h3 style={[ styles.headerText, { fontFamily: fontLoaded ? 'BebasNeue_400Regular' : 'Arial', fontSize: 36, }]}>Marvelspace</Text>
					<Text h3 style={styles.headerText}>a space for super friends</Text>
				</View>
			</TouchableHighlight>
		
		</View>
	);
}

const styles = StyleSheet.create({
	Header: {
		flex: 1,
		// position: "absolute",
		flexDirection: "column",
		top: 0,
		backgroundColor: "blue",
		height: "100%", // was 4em 
		width: "100%",
	},
	HeaderTitle: {
		flexDirection: "column",
		backgroundColor: "blue",
		width: "100%",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingHorizontal: 40,
		marginVertical: 30,
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
