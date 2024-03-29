import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  useWindowDimensions,
} from "react-native";

/**
 * About
 * Rule
 * Contact
 * Terms
 *
 * Brought to you
 * Copyright
 */

function Footer({ navigation }) {
	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 700;

	return (
		<TouchableHighlight
			style={styles.bottomTouchableHighlight}
			navigation={navigation}
		>
			<View
				style={width > widthBreakpoint ? styles.footer : styles.footerMobile}
			>
				<Text style={styles.footerTextSelect} style={styles.footerText}>
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
          navigation={navigation}
          style={styles.footerText}
          name="Rule"
          onPress={() => navigation.navigate("Rule")}
        >
          Rule
        </Text>
        <Text
          navigation={navigation}
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

				<Text style={styles.footerTextSelect} style={styles.footerText}>
					©2021 MarvelSpace.All Rights Reserved.
				</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	bottomTouchableHighlight: {
		flex: 1,
	},
	footer: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#1a1a1a",
		width: "100%",
		height: 64,
		justifyContent: "space-around",
		alignItems: "center",

		bottom: 0,
		backgroundColor: "#1a1a1a",
	},
	footerMobile: {
		flexDirection: "column",
		padding: 20,
		margin: 20,
		backgroundColor: "#1a1a1a",
		borderRadius: 10,
	},

	footerText: {
		color: "#efd595",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
		padding: 10,
	},
	footerTextSelect: {
		color: "#efd595",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 10,
	},
});
export default Footer;
