import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [reply, setReply] = useState("");
  const [comments, setComments] = useState([]);
  const [commentTimes, setCommentTimes] = useState([]);
  const [commentYears, setCommentYears] = useState([]);

  console.log(props.associatedContent);
  const postAuthor = props.associatedContent.author;
  const postTime = props.associatedContent.date.substring(11);
  const postDate =
    props.associatedContent.date.substring(5, 10) +
    "-" +
    props.associatedContent.date.substring(0, 4);

  function addToComments() {
    setComments([...comments, reply]);
    setReply("");
    setCommentTimes([...commentTimes, new Date().toLocaleTimeString()]);
    setCommentYears([...commentYears, new Date().toLocaleDateString()]);
  }

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
            Posted by {postAuthor} at {postTime} on {postDate}
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.likeButton}
              title="👍"
              color="aliceblue"
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
              color="aliceblue"
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
}

export default Post;

const styles = StyleSheet.create({
  post: {
    // border: "cadetblue solid 2px",
    borderColor: "cadetblue",
    borderStyle: "solid",
    borderWidth: 2, // was '2px'
    backgroundColor: "aliceblue",
    margin: 1, // was 1rem 
    marginBottom: 0,
    padding: 1, // was 1rem 
    borderRadius: 10, // was 10px
    width: 40, // was 40vw 
    height: 40, // was 40vh
    // float: "left",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // float: "left",
    // display: "inline",
    fontSize: 0.9, // was '0.9rem'
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    width: 1, // was 1rem
  },
  textInput: {
    textAlign: "center",
    margin: 0.5, // was 0.5rem
    // border: "cadetblue solid 2px",
    borderColor: "cadetblue",
    borderStyle: "solid",
    borderWidth: 2, // was '2px'
    padding: 0.3, // was 0.3rem
    backgroundColor: "aliceblue",
    borderRadius: 20, // was 20px
  },
  comment: {
    // display: "block",
    // border: "solid 1px cadetblue",
    borderColor: "cadetblue",
    borderStyle: "solid",
    borderWidth: 1, // was '1px'
    margin: 0.2, // was 0.2rem
    padding: 0.1, // was 0.1rem
    borderRadius: 10, // was 10px
  },
  commentText: {
    // display: "block",
  },
  commentSubscript: {
    fontSize: 0.7, // was '0.7rem'
    textAlign: "right",
  },
  postSubscript: {
    fontSize: 0.8, // was '0.8rem'
    textAlign: "right",
    // display: "inline-block",
    justifyContent: "space-between",
  },
  likeButton: {
    fontSize: 0.4, // was '0.4rem'
  },
  commentsWindow: {
    // border: "cadetblue dotted 1px",
    borderColor: "cadetblue",
    borderStyle: "dotted",
    borderWidth: 1, // was '1px'
    borderRadius: 12, // was 12px
    height: 15, // was 15vh
    marginTop: 0.5, // was 0.5rem
  },
  belowPost: {
    flex: 1,
    // display: "inline-block",
    justifyContent: "space-between",
    paddingTop: 0.1, // was 0.1rem
    paddingLeft: 2, // was 2rem
  },
});
