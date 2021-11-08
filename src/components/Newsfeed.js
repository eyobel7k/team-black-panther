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
    posts().then((data) => setPostsArr(data));
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
    <View style={styles.container} navigation={navigation}>
      <View>
        <Header navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text h3 style={styles.heading}>
            Newsfeed
          </Text>
          <ScrollView>{generatePosts}</ScrollView>
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
      <View>
        <Footer />
      </View>
    </View>
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
    marginTop: "1rem",
  },
  heading: {
    fontSize: "2rem",
    color: "#1722e8",
    letterSpacing: ".15rem",
  },
  text: {
    margin: 5,
    fontSize: "1.5em",
    fontWeight: 100,
    fontFamily: "Serif",
  },
  post: {
    border: "cadetBlue solid 2px",
    backgroundColor: "aliceBlue",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
    width: "40vw",
  },
  newPostButton: {
    position: "fixed",
    left: "3.2rem",
    bottom: "3.2rem",
    backgroundColor: "blue",
    paddingTop: "2.05rem",
    paddingLeft: ".4rem",
    paddingBottom: "2.05rem",
    paddingRight: ".4rem",
    borderRadius: "50%",
  },
  postButtonText: {
    color: "skyblue",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});

export default Newsfeed;
