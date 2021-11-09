import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Button, Pressable } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { posts } from "../services/WPAPI";
import Post from "./Post";
import ThemeLoggedIn from "./ThemeLoggedIn";
import PostModal from "./PostModal";
import { Text } from "react-native-elements";

function Newsfeed({ navigation }) {
	const [postsArr, setPostsArr] = useState([]);
	const [showPostModal, setShowPostModal] = useState(false);

	useEffect(() => {
		posts()
			.then((data) => setPostsArr(data))
			.catch((error) => console.log("in newsfeed.js ", error));
	}, []);

	const generatePosts = postsArr
		//Can make the posts display in reverse order with these lines, but causes problems with likes/dislikes
		// .slice(0)
		// .reverse()
		.map((post, i) => {
			if (post.excerpt?.rendered) {
				let content = post.excerpt.rendered;
				content = content.replace("<p>", "");
				content = content.replace("</p>", "");
				content = content.replace("\n", "");

				return (
					<Post key={i} content={content} id={i} associatedContent={post} />
				);
			}
		});

	return (
		<ThemeLoggedIn navigation={navigation}>
			<View style={styles.container} navigation={navigation}>
				<ScrollView>
					<View style={styles.body}>
						<Text h3 style={styles.heading}>
							Newsfeed
						</Text>
						<ScrollView>
							<Text>{generatePosts}</Text>
						</ScrollView>
					</View>
				</ScrollView>
				<Pressable
					style={styles.newPostButton}
					onPress={() => setShowPostModal(true)}
				>
					<Text style={styles.postButtonText}>New Post</Text>
				</Pressable>

				{showPostModal && (
					<PostModal
						setShowPostModal={setShowPostModal}
						postsArr={postsArr}
						setPostsArr={setPostsArr}
					/>
				)}
			</View>
		</ThemeLoggedIn>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	body: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		marginTop: 16,
	},
	heading: {
		fontSize: 16,
		color: "#1722e8",
		letterSpacing: 2.4,
	},
	text: {
		margin: 5,
		fontSize: 24,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
	post: {
		borderStyle: "solid",
		borderColor: "#5f9ea0",
		borderWidth: 2,
		backgroundColor: "#f0f8ff",
		margin: 16,
		padding: 16,
		borderRadius: 10,
		width: 40,
	},
	newPostButton: {
		left: 54.4,
		bottom: 54.4,
		backgroundColor: "#0000ff",
		paddingTop: 32.8,
		paddingLeft: 6.4,
		paddingBottom: 32.8,
		paddingRight: 6.4,
		borderRadius: 50,
	},
	postButtonText: {
		color: "#87ceeb",
		fontWeight: "bold",
		fontSize: 16,
	},
});

export default Newsfeed;
