import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
// import Task from "./components/Task";

export default function Chat() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask();

    const cleanedInput = task.trim().toLowerCase();

    if (cleanedInput.length > 0) {
      setTaskItems([...taskItems, task.trim()]);
      setTask("");
    }
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleAddTask();
    }
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <View
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}> Space Chat</Text>

          <View style={styles.writeTask}>
            <TextInput
              style={styles.input}
              placeholder={"Search Space characters ..."}
              value={task}
              onChangeText={(text) => setTask(text)}
              onKeyPress={handleKeypress}
              autoFocus={true}
              onSubmitEditing={handleAddTask}
            />
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ height: "40vh", width: "80vw" }}>
            <View style={styles.items}>
              {/* This is where the tasks will go! */}
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    {/* <Task text={item} /> */}

                    <View style={styles.item}>
                      <View style={styles.itemLeft}>
                        <View style={styles.square}></View>

                        <Text style={styles.itemText}>{item}</Text>
                        <Text>
                          posted on {}
                          {new Date().toLocaleTimeString()} on{" "}
                          {new Date().toLocaleDateString()}{" "}
                        </Text>
                      </View>
                      <View style={styles.circular}></View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Type a message ..."}
          value={task}
          onChangeText={(text) => setTask(text)}
          onKeyPress={handleKeypress}
          autoFocus={true}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  writeTask: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "90%",
    marginTop: "15px",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },

  item: {
    // backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    // width: 24,
    // height: 24,
    // backgroundColor: '#55BCF6',
    // opacity: 0.4,
    // borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: "15px",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
