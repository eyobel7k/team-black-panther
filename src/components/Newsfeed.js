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
    .slice(0)
    .reverse()
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
  console.log(postsArr);

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
    height: 80,
    width: 100,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  heading: {
    fontSize: 20,
    color: "#1722e8",
    letterSpacing: 0.15,
  },
  text: {
    margin: 5,
    fontSize: 15,
    fontWeight: "100",
    fontFamily: "Serif",
  },
  post: {
    borderStyle: "solid",
    borderColor: "cadetblue",
    borderWidth: 2,
    backgroundColor: "aliceblue",
    margin: 16,
    padding: 16,
    borderRadius: 10,
    width: 40,
  },
  newPostButton: {
    position: "absolute",
    left: 50,
    bottom: 50,
    backgroundColor: "blue",
    paddingTop: 16,
    paddingLeft: 7,
    paddingBottom: 16,
    paddingRight: 7,
    borderRadius: 50,
  },
  postButtonText: {
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default Newsfeed;
