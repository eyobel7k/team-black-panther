import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";

export default function Chat({
  myMessages,
  loggedInUserData,
  members,
  selectedMember,
}) {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setTaskItems(myMessages);
  }, []);

  useEffect(() => {
    wpApiFetch({
      path: WPAPI_PATHS.buddypress.messages,
      method: "POST",
      data: {
        context: "edit",
        message: newMessage,
        recipients: selectedMember.id,
      },
      token: loggedInUserData.token,
    }).then((response) => {
      console.log("in chat: ", response);
    });
  }, [newMessage]);

  const handleAddTask = () => {
    if (task === "") {
      Alert.alert("Error", "Please enter message ...");
    } else {
      Keyboard.dismiss();
      setNewMessage(task);
      setTaskItems([...taskItems, task]);
      setTask();
    }

    const cleanedInput = task.trim().toLowerCase();

    if (cleanedInput.length > 0) {
      setTaskItems([...taskItems, task.trim()]);
      setTask("");
    } else {
      console.log("Entry cannot be blank");
      setTask("");
    }
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleAddTask();

      setTask();
    }
  };
  const memberById = (id) => {
    const member = members.find((member) => member.id === id);
    return member;
  };

  const messageList = myMessages?.map((message, index) => (
    <View key={index}>
      <View
        styles={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#c5834c",
            padding: 5,
            borderRadius: 10,
            margin: 10,
          }}
        >
          {message?.excerpt?.rendered} sent by:
          {memberById(message?.last_sender_id)?.name}
        </Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View contentContainerStyle={{}} keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              placeholder={"Type message ..."}
              value={task}
              onChangeText={(text) => setTask(text)}
              onKeyPress={() => handleKeypress}
              autoFocus={true}
              onSubmitEditing={() => handleAddTask}
              spellCheck={false}
              autoCorrect={false}
              maxLength={140}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddTask()}
            >
              <Text style={styles.buttonText}>
                <Ionicons name="send-sharp" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            styles={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "nowrap",
              display: "flex",
              maxWidth: 50,
            }}
          >
            <View style={styles.messagesContainer}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 25,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                My Messages
              </Text>
              <Text>{messageList}</Text>
            </View>
          </View>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.item}>
                      <View style={styles.itemLeft}>
                        <View style={styles.square}></View>

                        <Text style={styles.itemText}>{item}</Text>
                      </View>
                    </View>
                    <View>
                      <AntDesign name="delete" size={12} color="black" />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efd595",
    marginTop: 10,
    height: "100%",
    flexGrow: 1,
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  items: {
    marginTop: 50,
  },
  writeTaskWrapper: {
    // position: "absolute",
    // bottom: 80,
    width: "90%",
    // flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  writeTask: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },

  input: {
    width: 200,
    height: 50,
    color: "black",
    marginLeft: 20,
    fontSize: 16,
    textAlign: "left",
    textAlignVertical: "top",
  },

  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 3,
    borderColor: "#00052C",
    marginRight: 15,
    marginHorizontal: 52,
    marginVertical: 23,
    paddingVertical: 10,
  },

  item: {
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
    flexWrap: "wrap",
    maxWidth: 250,
    flex: 1,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    marginRight: 15,
  },
  itemText: {
    maxWidth: "100%",
    fontSize: 15,
    // marginLeft: 90,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },

  addText: {
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    borderColor: "#000",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  button: {
    borderRadius: 40,
    padding: 10,
    marginLeft: 16,
    height: 50,
    width: 50,
    marginTop: 25,
  },

  buttonText: {
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#eee",
  },
  items: {
    flexShrink: 1,
  },
  messagesContainer: {
    flex: 1,
    width: 200,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});
