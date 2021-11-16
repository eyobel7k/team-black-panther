import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
  Button,
  Pressable,
} from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { posts } from "../services/WPAPI";
import Post from "./Post";
import ThemeLoggedIn from "./ThemeLoggedIn";
import PostModal from "./PostModal";
import { Text } from "react-native-elements";

function Newsfeed({ route, navigation }) {
  const [postsArr, setPostsArr] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const { width } = useWindowDimensions();
  const widthBreakpoint = 700;

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

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;

    // ***  Render for Mobile  ***
    return (
      <ThemeLoggedIn navigation={navigation}>
        <View style={styles.container} navigation={navigation}>
          <ScrollView>
            {/* for demo purposes, will delete afterwards */}
            {route.params?.user_display_name && (
              <Text>{`Howdy ${route.params.user_display_name}!`}</Text>
            )}
            <View style={styles.body}>
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
          </ScrollView>

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
  } else {
    styles = stylesWeb;

    // ***  Render for Web  ***
    return (
      <ThemeLoggedIn navigation={navigation}>
        <View style={styles.container} navigation={navigation}>
          {/* for demo purposes, will delete afterwards */}
          {route.params?.user_display_name && (
            <Text>{`Howdy ${route.params.user_display_name}!`}</Text>
          )}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={styles.newPostButton}
              onPress={() => setShowPostModal(true)}
            >
              <Text style={styles.postButtonText}>New Post</Text>
            </Pressable>
          </View>
          <View style={styles.body}>
            <Text h3 style={styles.heading}>
              Newsfeed
            </Text>

            <ScrollView style={styles.postsContainer}>
              <Text>{generatePosts}</Text>
            </ScrollView>
          </View>

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
}

// ***  Styles for Mobile ***
const stylesMobile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "80%",
    // flexBasis: "100%"
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
    flexBasis: "100%",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "column",
    marginLeft: 7,
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
  newPostButton: {
    position: "absolute",
    left: 10,
    top: -10,
    backgroundColor: "#0000ff",
    paddingTop: 12,
    paddingLeft: 15,
    paddingBottom: 12,
    paddingRight: 6.4,
    borderRadius: 50,
    width: 64,
  },
  postButtonText: {
    color: "#87ceeb",
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

// ***  Styles for Web  ***
const stylesWeb = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    // height: "80%",
    // flexBasis: "100%"
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    height: "80%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    // marginTop: 16,
    flexBasis: "100%",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "column",
    marginLeft: 7,
    flexWrap: "nowrap",
    maxWidth: 550,
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
  newPostButton: {
    position: "absolute",
    top: 80,
    left: 180,
    backgroundColor: "blue",
    paddingTop: 32,
    paddingLeft: 34,
    paddingBottom: 32,
    paddingRight: 34,
    borderRadius: 80,
  },
  postButtonText: {
    color: "#87ceeb",
    fontWeight: "bold",
    fontSize: 22,
  },
  buttonWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  postsContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 20,
    flexWrap: "nowrap",
  },
  footerWrapper: {
    // bottom: -500,
  },
});

export default Newsfeed;
