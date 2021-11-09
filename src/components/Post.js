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
              color="blue"
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
              color="blue"
              onPress={() => setDislikes(dislikes + 1)}
            >
              <Text>👎</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
           <Text> {dislikes}</Text>
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
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "blue",
    margin: 15,
   
    padding: 15,
    borderRadius: 10,
    width: 40,
    height: 40,
    // float: "left",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // float: "left",
    display: "flex",
    fontSize: 12,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    width: 12,
  },
  textInput: {
    textAlign: "center",
    margin: 12,
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 12,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  comment: {
    display: "flex",
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    margin:10,
    padding: 10,
    borderRadius: 10,
  },
  commentText: {
    display: "flex",
  },
  commentSubscript: {
    fontSize: 12,
    textAlign: "right",
  },
  postSubscript: {
    fontSize: 12,
    textAlign: "right",
    display: "flex",
    justifyContent: "space-between",
  },
  likeButton: {
    fontSize: 10,
  },
  commentsWindow: {
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 12,
    height: 15,
    marginTop: 12,
  },
  belowPost: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 24,
  },
});
