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
	const {width, height} = useWindowDimensions();
	const breakpoint = 700;

	return (
		<TouchableHighlight
			style={styles.bottomTouchableHighlight}
			navigation={navigation}
		>
			<View style={width > breakpoint ? styles.footer : styles.footerMobile}>
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
				<View style={width > breakpoint ? { marginTop: 0, flexDirection: 'row' } : { marginTop: 20 }}>
					<Text
						style={styles.footerTextSelect}
						style={styles.footerText}
					>
						Brought to you by Team Black Panther.
					</Text>

					<Text
						style={styles.footerTextSelect}
						style={styles.footerText}
					>
						©2021 MarvelSpace.All Rights Reserved.
					</Text>
				</View>
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
		flex: 1,
		flexDirection: "row",
		// backgroundColor: "black",
		width: "100%",
		// height: "20%",
		justifyContent: "space-around",
		alignItems: "center",
	},
	footerMobile: {
		flexDirection: 'column',
		padding: 20,
	},

	footerText: {
		color: "#6c72d9",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 14,
		padding: 10,
	},
	footerTextSelect: {
		color: "#6d6f91",
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 10,
	},
});
export default Footer;
