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
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [reply, setReply] = useState("");
  const [comments, setComments] = useState([]);
  const [commentTimes, setCommentTimes] = useState([]);
  const [commentYears, setCommentYears] = useState([]);
  const [members, setMembers] = useState([]);
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
  }, []);

  const memberById = (id) => {
    return members.find((member) => member.id === id);
  };

  function addToComments() {
    setComments([...comments, reply]);
    setReply("");
    setCommentTimes([...commentTimes, new Date().toLocaleTimeString()]);
    setCommentYears([...commentYears, new Date().toLocaleDateString()]);
  }

  let styles;

  // ***  Code and Render for Mobile  ***
  if (width < widthBreakpoint) {
    styles = stylesMobile;
    const showComments = comments.map((comment, i) => {
      return (
        <View key={i} style={styles.comment}>
          <Text style={styles.commentText}>{comment}</Text>
          <Text style={styles.commentSubscript}>
            posted by user at {commentTimes[i]} on {commentYears[i]}
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
              Posted by by {memberById(postAuthor)?.name}{" "}
              <Image
                style={{ width: 18, height: 18 }}
                source={{
                  uri: memberById(postAuthor)?.avatar_urls.full.startsWith(
                    "https:"
                  )
                    ? memberById(postAuthor).avatar_urls?.full
                    : "https://www.gravatar.com/avatar/?d=identicon",
                }}
              />
              at {postTime} on {postDate}
            </Text>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.likeButton}
                title="👍"
                color="#f0f8ff"
                onPress={() => setLikes(likes + 1)}
              >
                <Text>👍</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <Text>{likes}</Text>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.likeButton}
                title="👎"
                color="#f0f8ff"
                onPress={() => setDislikes(dislikes + 1)}
              >
                <Text>👎</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <Text>{dislikes}</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.commentsWindow}>
          <Text>{showComments}</Text>
        </ScrollView>

        <TextInput
          style={styles.textInput}
          value={reply}
          onChangeText={setReply}
          onSubmitEditing={addToComments}
        />
        <Button title="comment" onPress={addToComments} />
      </View>
    );
  } else {
    // ***  Code and Render for Web  ***
    styles = stylesWeb;
    const showComments = comments.map((comment, i) => {
      return (
        <View key={i} style={styles.comment}>
          <Text style={styles.commentText}>{comment}</Text>
          <Text style={styles.commentSubscript}>
            posted by user at {commentTimes[i]} on {commentYears[i]}
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
              />
              at {postTime} on {postDate}
            </Text>
            <View style={styles.likesAndDislikes}>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.likeButton}
                  title="👍"
                  color="#f0f8ff"
                  onPress={() => setLikes(likes + 1)}
                >
                  <Text style={styles.thumb}>👍</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <Text style={styles.thumb}>{likes}</Text>
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.likeButton}
                  title="👎"
                  color="#f0f8ff"
                  onPress={() => setDislikes(dislikes + 1)}
                >
                  <Text style={styles.thumb}>👎</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <Text style={styles.thumb}>{dislikes}</Text>
              </View>
            </View>
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
    borderColor: "#5f9ea0",
    borderWidth: 2,
    backgroundColor: "#f0f8ff",
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 10,
    width: 300,
    height: 300,
    // height: "40%",
    // float: "left",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    // float: "left",
    // display: "inline",
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
    borderColor: "#5f9ea0",
    borderWidth: 2,
    padding: 4.8,
    backgroundColor: "#f0f8ff",
    borderRadius: 20,
    width: 320,
    alignSelf: "center",
  },
  comment: {
    // display: "block",
    borderStyle: "solid",
    borderColor: "#5f9ea0",
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
    textAlign: "right",
    // display: "inline-block",
    // justifyContent: "space-between",
  },
  likeButton: {
    fontSize: 6,
  },
  commentsWindow: {
    flexGrow: 1,
    borderStyle: "solid",
    borderColor: "#5f9ea0",
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    marginTop: 8,
    width: 300,
    // alignContent: "center",
    alignSelf: "center",
  },
  belowPost: {
    flex: 1,
    // display: "inline-block",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    borderColor: "#5f9ea0",
    borderWidth: 2,
    backgroundColor: "#f0f8ff",
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 10,
    width: 500,
    height: 300,
    // height: "40%",
    // float: "left",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    // float: "left",
    // display: "inline",
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
    borderColor: "#5f9ea0",
    borderWidth: 2,
    padding: 4.8,
    backgroundColor: "#f0f8ff",
    borderRadius: 20,
    width: 380,
    alignSelf: "center",
  },
  comment: {
    // display: "block",
    borderStyle: "solid",
    borderColor: "#5f9ea0",
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
    textAlign: "right",
    // display: "inline-block",
    // justifyContent: "space-between",
  },
  likeButton: {
    fontSize: 6,
  },
  commentsWindow: {
    borderStyle: "solid",
    borderColor: "#5f9ea0",
    borderWidth: 2,
    borderRadius: 12,
    height: 120,
    marginTop: 8,
    width: 460,
    // alignContent: "center",
    alignSelf: "center",
  },
  belowPost: {
    flex: 1,
    // display: "inline-block",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 1.6,
    paddingLeft: 32,
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
  thumb: {
    fontSize: 14,
    // marginLeft: 4,
    // marginRight: 4,
  },
  likesAndDislikes: {
    flexDirection: "row",
    textAlign: "right",
  },
});
