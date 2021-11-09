import React from "react";
import {
	StyleSheet,
	View,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function ThemeLoggedIn({ children, navigation }) {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 700;

	return (
		<View style={styles.container} navigation={navigation}>
			<View style={styles.Header}>
				<Header navigation={navigation} />
			</View>

			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollContentContainer}
			>
				{children}
				
				{width < widthBreakpoint && (
					<View style={styles.Footer}>
						<Footer navigation={navigation} />
					</View>
				)}
			</ScrollView>

			{width >= widthBreakpoint && (
				<View style={styles.Footer}>
					<Footer navigation={navigation} />
				</View>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	scrollView: {
		height: "60%",
		paddingTop: 10,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: "#D3D3D3",
		paddingVertical: 70,
	},
	scrollContentContainer: {
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: 'center',
		
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: "#fff",
	},
	text: {
		margin: 5,
		fontSize: 24,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
	Header: {
		height: "20%",
		top: 0,
	},
	Footer: {
		height: "20%",
		bottom: 0,
	},
});

export default ThemeLoggedIn;
