import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import { Text } from "react-native-elements";
import welcomeImg from "../../assets/BlackPanther.png";
function HeaderLogPage({ navigation }) {
	const navigateHome = () => {
		navigation.navigate("LogInPage");
	}
	return (
		<View style={styles.Header}>
			<TouchableHighlight onPress={navigateHome}>
				<View style={styles.HeaderWarp}>
					<Image
						source={welcomeImg}
						style={{ height: "90%", width: 150, paddingTop: 120, marginEnd: 0 }}
					/>

					<View style={styles.HeaderTitle}>
						<Text h3 style={styles.headerText}>
							marvelspace
						</Text>
						<Text h4 style={styles.headerText}>
							a space for super friends
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	Header: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		backgroundColor: "#1a1a1a",
	},
	HeaderTitle: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		// padding: 30,
		width: "50%",
	},
	headerTouchableHighlight: {
		alignItems: "center",
		justifyContent: "space-evenly",
		flex: 1,
	},
	headerText: {
		color: "#efd595",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
	},
	HeaderWarp: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		alignItems: "flex-end",
		width: "100%",
		paddingTop: 10,
		// paddingBottom: 20,
	},
});
export default HeaderLogPage;
