// import React from "react";
// import { Router, Scene } from "react-native-router-flux";
// import Home from "./Home.js";
// import LogInPage from "./LogInPage.js";

import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function Friends() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<Header />
				</View>

				<View style={styles.body}>
					<Text style={styles.text}>
						Open up App.js to start working on your app!
					</Text>
				</View>

				<View>
					<Footer />
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	body: {
		backgroundColor: "#fff",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: "1.5em",
		fontWeight: 100,
		fontFamily: "Serif",
	},
});

export default Friends;

// const Routes = () => (
// 	<Router>
// 		<Scene key="root">
// 			<Scene key="home" component={Home} title="Home" initial={true} />
// 			<Scene key="LogInPage" component={LogInPage} title="Login" />
// 		</Scene>
// 	</Router>
// );
// export default Routes;
