import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { posts } from "./WPAPI";
import Post from "./Post";
import ThemeLoggedIn from "./ThemeLoggedIn";

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
    <View style={styles.container} navigation={navigation}>
      <View>
        <Header navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text>Newsfeed</Text>
          <ScrollView>{generatePosts}</ScrollView>
        </View>
      </ScrollView>
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
});

export default Newsfeed;
