import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Button, Pressable } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";
import Post from "./Post";
import ThemeLoggedIn from "./ThemeLoggedIn";
import PostModal from "./PostModal";
import { Text } from "react-native-elements";

function Newsfeed({ route, navigation, loggedInUserData }) {
  const [postsArr, setPostsArr] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
	const [loading, setLoading] = useState(true);

	const pruneTags = (text) => {
		return text.replace(/<[^>]+>/g, "")
			.replace("\n", "")
	}

  useEffect(() => {
		if (loading) {
			wpApiFetch({ path: WPAPI_PATHS.buddypress.activity })
				.then(data => {
					setPostsArr(data);
					setLoading(false);
				})
		}

  }, [loading]);

  const generatePosts = postsArr
    //Can make the posts display in reverse order with these lines, but causes problems with likes/dislikes
    // .slice(0)
    // .reverse()
    .map((post, i) => {
      const content = pruneTags(post.content.rendered || post.title);
			return (
				<Post key={i} content={content} id={i} associatedContent={post} />
			);
    });

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View style={styles.container} navigation={navigation}>

				<View style={styles.body}>
					{ route.params?.loginSuccess && <Text h3>{`Successfully logged in!`}</Text> }
					<Text h3 style={styles.heading}>
						Newsfeed
					</Text>
					<View style={styles.buttonWrapper}>
						<Pressable
							style={styles.newPostButton}
							onPress={() => setShowPostModal(true)}
						>
							<Text style={styles.postButtonText}>New Post</Text>
						</Pressable>
					</View>
					<ScrollView style={styles.postsContainer}>
						<Text>{generatePosts}</Text>
					</ScrollView>
				</View>

        {showPostModal && (
          <PostModal
            setShowPostModal={setShowPostModal}
            postsArr={postsArr}
            setPostsArr={setPostsArr}
						loggedInUserData={loggedInUserData}
          />
        )}
      </View>
    </ThemeLoggedIn>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#efd595",
		height: "80%",
		// flexBasis: "100%"
	},
	body: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#efd595",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		marginTop: 16,
		flexBasis: "100%",
		flexShrink: 0,
		flexGrow: 0,
		flexDirection: "column",
		marginLeft: 7,
	},
	heading: {
		fontSize: 16,
		color: "#000000",
		letterSpacing: 2.4,
	},
	text: {
		margin: 5,
		fontSize: 24,
		fontWeight: "100",
		// fontFamily: "Serif",
	},
	newPostButton: {
		left: 10,
		top: -10,
		backgroundColor: "#c5834c",
		paddingTop: 12,
		paddingLeft: 15,
		paddingBottom: 12,
		paddingRight: 6.4,
		borderRadius: 50,
		width: 64,
	},
	postButtonText: {
		color: "#87cefa",
		fontWeight: "bold",
		fontSize: 16,
	},
	buttonWrapper: {
		position: "absolute",
		top: 0,
		left: 0,
	},
	postsContainer: {
		width: "100%",
		padding: 20,
		flexWrap: "nowrap",
	},
	footerWrapper: {
		// bottom: -500,
	},
});

export default Newsfeed;
