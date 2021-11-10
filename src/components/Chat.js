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
    } else {
      console.log("Entry cannot be blank");
      setTask("");
    }}
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
          contentContainerStyle={
            {
              // flexGrow: 1,
            }
          }
          keyboardShouldPersistTaps="handled"
        >
          {/* Today's Tasks */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}> Space Chat</Text>

            {/* <View style={styles.writeTask}>
              <TextInput
                style={styles.input}
                placeholder={"Type message ..."}
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
            </View> */}

            <View style={styles.writeTask}>
              <TextInput
                style={styles.input}
                placeholder={"Type message ..."}
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
            <ScrollView style={{ height: "60%", width: "90%",  }}>
              <View style={styles.items}>
                {/* This is where the message will go! */}
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

                          <Text style={styles.itemText}>
                            {item}
                            {"   "}
                          </Text>
                          {/* <Text style={styles.date}>
                          posted on {"     "}
                          {new Date().toLocaleTimeString()} on{" "}
                          {new Date().toLocaleDateString()}{" "}
                        </Text> */}
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
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    height: "100%",
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    
    alignSelf: "center",
    justifyContent: "center",
  },
  items: {
    marginTop: 50,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 80,
    // width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    
  },
  writeTask: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  input: {
    
    paddingHorizontal: 40,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderColor: "#C0C0C0",
    borderWidth: 3,
    width: "77%",
    marginTop: 50,
    marginLeft: 10,
    alignItems: "stretch",
    borderColor:"#0115B1"
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
    borderColor:"#00052C",
    marginRight: 15,
    marginHorizontal: 52,
    marginVertical:23,
    paddingVertical:10
    
  },

  item: {
    // backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
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
    marginLeft: 90,
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
});
