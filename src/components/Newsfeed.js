import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import { posts } from "../services/WPAPI";
import Post from "./Post";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { Text } from "react-native-elements";
function Newsfeed({ navigation }) {
  const [postsArr, setPostsArr] = useState([]);
  useEffect(() => {
    posts().then((data) => setPostsArr(data));
  }, []);
  const generatePosts = postsArr.map((post, i) => {
    let content = post.excerpt.rendered;
    content = content.replace("<p>", "");
    content = content.replace("</p>", "");
    content = content.replace("\n", "");
    return <Post key={i} content={content} id={i} associatedContent={post} />;
  });

  return (
    <ThemeLoggedIn navigation={navigation}>
      <ScrollView>
        <View style={styles.body}>
          <Text h3>Newsfeed</Text>
          <ScrollView>{generatePosts}</ScrollView>
        </View>
      </ScrollView>
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
    marginTop: 15,
  },
  text: {
    margin: 5,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Serif",
  },
  post: {
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "blue",
    margin: "15",
    padding: "15",
    borderRadius: 10,
    width: "40vw",
  },
});

export default Newsfeed;
