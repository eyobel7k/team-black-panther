import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, } from "react-native";
import ThemeLoggedOut from "./ThemeLoggedOut";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";

function About({ navigation, loggedInUserData }) {
	const [pageData, setPageData] = useState({});
	const [loading, setLoading] = useState(true);
	const Theme = loggedInUserData?.token ? ThemeLoggedIn : ThemeLoggedOut;
	const pruneTags = text => text.replace(/<[^>]+>/g, "").replace("\n", "").replace("&rsquo;", "'");

	useEffect(() => {
		if (loading) {
			wpApiFetch({ path: WPAPI_PATHS.wp.pages, queryParams: {search: 'about'}})
			.then(([ page ]) => {
				setPageData(page);
				setLoading(false);
			})
		}
	},[loading]);
	
	return (
		<Theme navigation={navigation} loggedInUserData={loggedInUserData}>
			<View style={styles.body} navigation={navigation}>
			<Text style={styles.text}>About</Text>
				<Text style={styles.textParagraph}>{loading ? 'loading...' : pruneTags(pageData.content.rendered)}</Text>
			</View>
		</Theme>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#efd595",
	},
	body: {
		backgroundColor: "#efd595",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: 30,
		fontWeight: "100",
	},
	textParagraph: {
		margin: 5,
		fontSize: 24,
	}
});

export default About;