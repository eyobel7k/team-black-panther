import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

function PostModal(props) {
  const [text, onChangeText] = useState("");

  const addNewPost = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let now =
      year +
      "-" +
      month +
      "-" +
      date +
      "T" +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    let newPost = {
      excerpt: { rendered: text },
      author: "me",
      date: now,
    };
    props.setPostsArr([...props.postsArr, newPost]);
    props.setShowPostModal(false);
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Pressable
          style={styles.cornerX}
          onPress={() => props.setShowPostModal(false)}
        >
          <Text style={styles.cornerXText}>X</Text>
        </Pressable>
        <Text style={styles.modalText}>What would you like to post?</Text>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={addNewPost}
        ></TextInput>
        <Pressable style={styles.imgSubmitButton}>
          <Text>Upload Image</Text>
        </Pressable>
        <Pressable style={styles.submitButton} onPress={addNewPost}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	modalContainer: {
		// position: "absolute",
		paddingTop: 80,
		top: 0,
		right: -14,
		bottom: 0,
		left: -7,
		backgroundColor: "rgba(0,0,0,0.5)",
		alignItems: "center",
		// justifyContent: "center",
		zIndex: 100,
	},
	modal: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#000",
		margin: 0,
		borderRadius: 5,
		padding: 30,
		backgroundColor: "#efd595",
		width: "80%",
		height: 400,
		alignItems: "center",
		justifyContent: "center",
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#c5834c",
		borderRadius: 20,
	},
	textInput: {
		marginTop: 32,
		backgroundColor: "#c5834c",
		width: "90%",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#c5834c",
		padding: 16,
		borderRadius: 20,
		textAlign: "center",
	},
	cornerX: {
		// position: "absolute",
		top: 12,
		right: 16,
	},
	cornerXText: {
		fontSize: 18,
	},
	submitButton: {
		width: 96,
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#87cefa",
		color: "#c5834c",
	},
	imgSubmitButton: {
		width: 122,
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		backgroundColor: "#87cefa",
		color: "#c5834c",
	},
	modalText: {
		textAlign: "center",
	},
});

export default PostModal;
