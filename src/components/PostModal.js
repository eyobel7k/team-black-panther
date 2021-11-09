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
        <Text>What would you like to post?</Text>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={addNewPost}
        ></TextInput>
        <Pressable style={styles.imgSubmitButton}>
          <Text>Upload Image</Text>
        </Pressable>
        <Pressable style={styles.submitButton}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  modal: {
    // border: "solid 1px #000",
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1, // was '1px'
    margin: "0 auto",
    borderRadius: 5,
    padding: 30,
    backgroundColor: "#FFF",
    width: 60, // was 60vw
    height: 60, // was 60vh
    alignItems: "center",
    justifyContent: "center",
    // border: "solid 2px cadetblue",
    // borderRadius: "20px",
  },
  textInput: {
    marginTop: 2, // was 2rem
    backgroundColor: "aliceblue",
    width: 20, // was 20rem
    // border: "solid 1px cadetblue",
    borderColor: "cadetblue",
    borderStyle: "solid",
    borderWidth: 1, // was '1px'
    padding: 1, // was 1rem
    borderRadius: 20, // was 20px
    textAlign: "center",
  },
  cornerX: {
    position: "absolute",
    top: 12,
    right: 16,
  },
  cornerXText: {
    fontSize: 1.2, // was '1.2rem'
  },
  submitButton: {
    width: 6, // was 6rem
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "lightskyblue",
    color: "blue",
  },
  imgSubmitButton: {
    width: 8, // was 8rem
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "lightskyblue",
    color: "blue",
  },
});

export default PostModal;
