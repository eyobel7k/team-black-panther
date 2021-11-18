import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";

function Post(props) {
  const [reply, setReply] = useState("");
  const [newComments, setNewComments] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const widthBreakpoint = 700;

  const postAuthor = props.associatedContent.author;
  const postTime = props.associatedContent.date.substring(11);
  const postDate =
    props.associatedContent.date.substring(5, 10) +
    "-" +
    props.associatedContent.date.substring(0, 4);

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.buddypress.members }).then((data) => {
      setMembers(data);
    });
    wpApiFetch({ path: WPAPI_PATHS.wp.comments }).then(data => {

    })
  }, []);

  useEffect(() => {
    if (loading) {
      const commentData = {
        content: reply,
        date: new Date().toISOString().replace(/\..+/, ""),
        post: props.associatedContent.id,
      }
      wpApiFetch({ path: WPAPI_PATHS.wp.comments, method: "POST", data: commentData, token: props.loggedInUserData.token })
        .then((comment) => {
          setReply("");
          setNewComments([ ...newComments, comment ]);
        }).catch(response => {
          console.error(response.message);
        }).finally(() => {
          setLoading(false);
        })
    }
  }, [loading])

  const pruneTags = (text) => text.replace(/<[^>]+>/g, "").replace("\n", "");

  const memberById = (id) => {
    return members?.find((member) => member.id === id);
  };

  function addToComments() {
    setLoading(true);
  }

  let styles;

  // ***  Code and Render for Mobile  ***
  if (width < widthBreakpoint) {
    styles = stylesMobile;
    const joinedComments = [ ...props.associatedComments, ...newComments ];
    const showComments = joinedComments.map((comment, i) => {
      const date = new Date(comment.date);
      const content = pruneTags(comment.content.rendered);
  
      return (
        <View key={i} style={styles.comment}>
          <Text style={styles.commentText}>{content}</Text>
          <Text style={styles.commentSubscript}>
            posted by user at {date.toLocaleTimeString()} on {date.toLocaleDateString()}
          </Text>
        </View>
      );
    });
    return (
      <View key={props.id}>
        <View style={styles.post}>
          <Text>{props.content}</Text>
        </View>
        <View>
          <View style={styles.belowPost}>
            <Text style={styles.postSubscript}>
              Posted by {memberById(postAuthor)?.name}{" "}
              <Image
                style={{ width: 18, height: 18 }}
                source={{
                  uri: memberById(postAuthor)?.avatar_urls.full.startsWith(
                    "https:"
                  )
                    ? memberById(postAuthor).avatar_urls?.full
                    : "https://www.gravatar.com/avatar/?d=identicon",
                }}
              />{" "}
              at {postTime} on {postDate}
            </Text>
          </View>
        </View>
        <View style={styles.commentsWindow}>
          <Text>{showComments}</Text>
        </View>

        <TextInput
          style={styles.textInput}
          value={reply}
          onChangeText={setReply}
          onSubmitEditing={addToComments}
        />
        <Button title={loading ? 'loading...' : 'comment'} onPress={addToComments} />
      </View>
    );
  } else {
    // ***  Code and Render for Web  ***
    styles = stylesWeb;
    const joinedComments = [ ...props.associatedComments, ...newComments ];
    const showComments = joinedComments.map((comment, i) => {
      const date = new Date(comment.date);
      const content = pruneTags(comment.content.rendered);
  
      return (
        <View key={i} style={styles.comment}>
          <Text style={styles.commentText}>{content}</Text>
          <Text style={styles.commentSubscript}>
            posted by user at {date.toLocaleTimeString()} on {date.toLocaleDateString()}
          </Text>
        </View>
      );
    });
    return (
      <View key={props.id} style={styles.postWrapper}>
        <View style={styles.post}>
          <Text>{props.content}</Text>
        </View>
        <View>
          <View style={styles.belowPost}>
            <Text style={styles.postSubscript}>
              by {memberById(postAuthor)?.name}{" "}
              <Image
                style={{ width: 18, height: 18 }}
                source={{
                  uri: memberById(postAuthor)?.avatar_urls.full.startsWith(
                    "https:"
                  )
                    ? memberById(postAuthor).avatar_urls?.full
                    : "https://www.gravatar.com/avatar/?d=identicon",
                }}
              />{" "}
              at {postTime} on {postDate}
            </Text>
            {/* <Pressable onPress={}>Like</Pressable> */}
          </View>
        </View>
        <View style={{ flexGrow: 1 }}>
          <ScrollView style={styles.commentsWindow}>
            <Text>{showComments}</Text>
          </ScrollView>
        </View>
        <TextInput
          style={styles.textInput}
          value={reply}
          onChangeText={setReply}
          onSubmitEditing={addToComments}
        />
        <View style={styles.commentButtonWrapper}>
          <Button title="comment" onPress={addToComments} />
        </View>
      </View>
    );
  }
}

export default Post;

// ***  Styles for Mobile  ***
const stylesMobile = StyleSheet.create({
  post: {
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    backgroundColor: "#c5834c",
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 10,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    fontSize: 16,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    width: 16,
  },
  textInput: {
    textAlign: "center",
    margin: 8,
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    padding: 4.8,
    backgroundColor: "#f0f8ff",
    borderRadius: 20,
    width: 320,
    alignSelf: "center",
  },
  comment: {
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    margin: 3.2,
    padding: 1.6,
    borderRadius: 10,
    width: 297,
    alignSelf: "center",
  },
  commentText: {
    alignSelf: "center",
  },
  commentSubscript: {
    fontSize: 11,
    textAlign: "center",
    width: 300,
  },
  postSubscript: {
    fontSize: 11,
    textAlign: "center",
  },
  likeButton: {
    fontSize: 6,
  },
  commentsWindow: {
    flexGrow: 1,
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 8,
    width: 300,
    alignSelf: "center",
  },
  belowPost: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    paddingTop: 1.6,
    paddingLeft: 32,
    width: 320,
  },
  postWrapper: {
    flex: 1,
    flexWrap: "nowrap",
    paddingBottom: 40,
    paddingLeft: 0,
  },
  commentButtonWrapper: {
    alignSelf: "center",
    width: 100,
  },
});

// ***  Styles for Web  ***
const stylesWeb = StyleSheet.create({
  post: {
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    backgroundColor: "#c5834c",
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 10,
    width: 500,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    fontSize: 16,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    width: 8,
    marginRight: 8,
    marginLeft: 8,
  },
  textInput: {
    textAlign: "center",
    margin: 8,
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    padding: 4.8,
    backgroundColor: "#f0f8ff",
    borderRadius: 20,
    width: 380,
    alignSelf: "center",
  },
  comment: {
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    margin: 3.2,
    padding: 1.6,
    borderRadius: 10,
    width: 450,
    alignSelf: "center",
  },
  commentText: {
    alignSelf: "center",
  },
  commentSubscript: {
    fontSize: 11,
    textAlign: "center",
    alignSelf: "center",
    width: 300,
  },
  postSubscript: {
    fontSize: 14,
  },
  likeButton: {
    fontSize: 6,
  },
  commentsWindow: {
    borderStyle: "solid",
    borderColor: "#c5834c",
    borderWidth: 2,
    borderRadius: 12,
    height: 120,
    marginTop: 8,
    width: 460,
    alignSelf: "center",
  },
  belowPost: {
    flex: 1,
    textAlign: "center",
    paddingTop: 1.6,
    width: 500,
  },
  postWrapper: {
    flex: 1,
    flexWrap: "nowrap",
    paddingBottom: 40,
    paddingLeft: 0,
  },
  commentButtonWrapper: {
    alignSelf: "center",
    width: 100,
  },
});
