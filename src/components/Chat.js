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
					<ScrollView style={{ height: "40%", width: "60%" }}>
						<View style={styles.items}>
							{/* This is where the tasks will go! */}
							<Text>
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
													<Text style={styles.date}>
														posted on {"     "}
														{new Date().toLocaleTimeString()} on{" "}
														{new Date().toLocaleDateString()}{" "}
													</Text>
												</View>
												<View style={styles.circular}></View>
											</View>
										</TouchableOpacity>
									);
								})}
							</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 15,
		height: "50%",
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
		marginTop: 50,
	},
	writeTaskWrapper: {
		// position: "absolute",
		bottom: 80,
		width: "50%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	writeTask: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-around",
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: "#fff",
		borderRadius: 60,
		borderColor: "#c0c0c0",
		borderWidth: 1,
		width: "100%",
		marginTop: 15,
	},

	addWrapper: {
		width: 80,
		height: 80,
		backgroundColor: "#fff",
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#c0c0c0",
		borderWidth: 1,
	},

	item: {
		// backgroundColor: '#fff',
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
		marginRight: 15,
	},
	itemText: {
		maxWidth: "100%",
		fontSize: 25,
		marginLeft: 90,
	},
	circular: {
		width: 12,
		height: 12,
		borderColor: "#55bcf6",
		borderWidth: 2,
		borderRadius: 5,
	},
	date: {
		fontSize: 15,
		// fontStyle: "italic",
		color: "#800080",
	},
});
