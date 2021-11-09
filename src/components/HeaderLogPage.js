import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { Text } from "react-native-elements";

function HeaderLogPage() {
	const [fontLoaded] = useFonts({ BebasNeue_400Regular });
	return (
		<View style={styles.Header}>
			<TouchableHighlight style={styles.headerTouchableHighlight}>
				<View style={styles.HeaderTitle}>
					<Text h3 style={styles.headerText}>
						Marvelspace a space
					</Text>
					<Text h3 style={styles.headerText}>
						for super friends
					</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	Header: {
		flex: 1,
		// Position: "absolute",
		flexDirection: "column",
		top: 0,
		backgroundColor: "#0000FF",
		height: 80,
		width: "100%",
	},
	HeaderTitle: {
		flexDirection: "column",
		backgroundColor: "#0000FF",
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
