import React, { useState } from "react";
import { Text } from "react-native-elements";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Footer from "./Footer";
import HeaderLogPage from "./HeaderLogPage";

function ResetPasswordPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, onChangeUsername] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [confirmNewPassword, onChangeConfirmNewPassword] = useState("");

  function checkValidity() {
    if (confirmNewPassword !== newPassword) {
      console.log("Passwords do not match");
    } else if (confirmNewPassword.length > 0) {
      console.log("Password will be reset");
    } else {
      console.log("Invalid entry. Password cannot be blank");
    }
  }

  return (
    <View style={styles.container} navigation={navigation}>
      <View style={styles.header}>
        <HeaderLogPage />
      </View>
      <View style={styles.body}>
        <View style={styles.LogInBorder}>
          <Text h4 style={styles.bodyText}>
            Password Reset
          </Text>
          <Text style={styles.bodyText}>Create your new password:</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="UserName"
              placeholderTextColor="#1722e8"
              value={username}
              onChangeText={onChangeUsername}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="New Password"
              placeholderTextColor="#1722e8"
              secureTextEntry={true}
              value={newPassword}
              onChangeText={onChangeNewPassword}
              // onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm New Password"
              placeholderTextColor="#1722e8"
              secureTextEntry={true}
              value={confirmNewPassword}
              onChangeText={onChangeConfirmNewPassword}
              onSubmitEditing={checkValidity}
              // onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.bodyText} onPress={checkValidity}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <Text onPress={() => navigation.goBack()}>Back to Logging Page</Text>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		backgroundColor: "#fff",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		flexDirection: "row",
		margin: 20,
		padding: 40,
	},
	bodyText: {
		color: "#1722e8",
	},
	LogInBorder: {
		borderStyle: "solid",
		borderRadius: 50,
		backgroundColor: "#fff",
		width: "60%",
		height: "100%",
		color: "#e9e9f5",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginHorizontal: 10,
		paddingTop: 20,
		paddingBottom: 20,
	},

	header: {
		width: "100%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
	},
	footer: {
		width: "100%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
	},
	inputView: {
		width: "60%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#e9e9f5",
	},

	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		// marginLeft: 20,
		textAlign: "center",
	},
	loginBtn: {
		width: "20%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#87cefa",
	},
});
export default ResetPasswordPage;
