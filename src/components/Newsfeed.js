import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { WPAPI_PATHS, wpApiFetch, posts } from "../services/WPAPI";
import Post from "./Post";
import ThemeLoggedIn from "./ThemeLoggedIn";
import PostModal from "./PostModal";
import { Text } from "react-native-elements";

function Newsfeed({ route, navigation, loggedInUserData }) {
  const [postsArr, setPostsArr] = useState([]);
  const [commentsArr, setCommentsArr] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollToTopFromNewsfeed, setScrollToTopFromNewsfeed] = useState(false);

  const { width } = useWindowDimensions();
  const widthBreakpoint = 700;

  const pruneTags = (text) => {
    return text.replace(/<[^>]+>/g, "").replace("\n", "");
  };

  useEffect(() => {
    if (loading) {
      Promise.all([
        wpApiFetch({ path: WPAPI_PATHS.wp.posts }),
        wpApiFetch({ path: WPAPI_PATHS.wp.comments })
      ])
      .then(([ posts, comments ]) => {
        setPostsArr(posts);
        setCommentsArr(comments);
        setLoading(false);
      })
    }
  }, [loading]);

  const generatePosts = postsArr
    .map((post, i) => {
      const content = pruneTags(post.excerpt?.rendered);
      const associatedComments = commentsArr.filter(comment => comment.post === post.id);
      return <Post key={i} content={content} id={i} associatedContent={post} associatedComments={associatedComments} loggedInUserData={loggedInUserData} />;
    });

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;

    // ***  Render for Mobile  ***
    return (
      <ThemeLoggedIn navigation={navigation} loggedInUserData={loggedInUserData}>
        <View style={styles.container} navigation={navigation}>
          <ScrollView>
            {route.params?.loginSuccess && (
              <Text h3>{`Successfully logged in!`}</Text>
            )}
            <View style={styles.body}>
              <Text h3 style={styles.heading}>
                {loading ? 'Loading Newsfeed...' : 'Newsfeed'}
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
              loggedInUserData={loggedInUserData}
              refreshNewsfeed={setLoading}
            />
          )}
        </View>
      </ThemeLoggedIn>
    );
  } else {
    styles = stylesWeb;

    // ***  Render for Web  ***
    return (
      <ThemeLoggedIn
        navigation={navigation}
        scrollToTopFromNewsfeed={scrollToTopFromNewsfeed}
        loggedInUserData={loggedInUserData}
      >
        <View style={styles.container} navigation={navigation}>
          {route.params?.loginSuccess && (
            <Text h3>{`Successfully logged in!`}</Text>
          )}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={styles.newPostButton}
              onPress={() => {
                setShowPostModal(true);
                setScrollToTopFromNewsfeed(true);
              }}
            >
              <Text style={styles.postButtonText}>New Post</Text>
            </Pressable>
          </View>
          <View style={styles.body}>
            <Text h3 style={styles.heading}>
              {loading ? 'Loading Newsfeed...' : 'Newsfeed'}
            </Text>

            <ScrollView style={styles.postsContainer}>
              <Text>{generatePosts}</Text>
            </ScrollView>
           
          </View>

          {showPostModal && (
            <PostModal
              setShowPostModal={setShowPostModal}
              postsArr={postsArr}
              loggedInUserData={loggedInUserData}
              refreshNewsfeed={setLoading}
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
    backgroundColor: "#efd595",
    height: "80%",
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
  },
  newPostButton: {
    position: "absolute",
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
    color: "#efd595",
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
});

// ***  Styles for Web  ***
const stylesWeb = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efd595",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#efd595",
    height: "80%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
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
    color: "#000000",
    letterSpacing: 2.4,
  },
  text: {
    margin: 5,
    fontSize: 24,
    fontWeight: "100",
  },
  newPostButton: {
    position: "absolute",
    top: 80,
    left: "20%",
    backgroundColor: "#c5834c",
    paddingTop: 32,
    paddingLeft: 30,
    paddingBottom: 32,
    paddingRight: 34,
    borderRadius: 80,
    marginLeft: 20,
  },
  postButtonText: {
    color: "#efd595",
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
});

export default Newsfeed;
