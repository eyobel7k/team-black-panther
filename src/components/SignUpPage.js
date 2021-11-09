import React from "react";
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ThemeLoggedOut from "./ThemeLoggedOut";
import { Text } from "react-native-elements";

function SignUpPage({ navigation }) {
  return (
    <ThemeLoggedOut navigation={navigation}>
      <View style={styles.body}>
        <View style={styles.LogInBorder}>
          <Text h3 style={styles.bodyText}>
            Sign Up
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#1722e8"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Full Name"
              placeholderTextColor="#1722e8"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="UserName"
              placeholderTextColor="#1722e8"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#1722e8"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.bodyText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <Text onPress={() => navigation.goBack()}>Back to Logging Page</Text>
      </View>
    </ThemeLoggedOut>
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
    backgroundColor: "white",
    width: "60%",
    height: "50%",
    color: "#e9e9f5",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    paddingTop: 20,
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
    marginLeft: 20,
  },
  loginBtn: {
    width: "20%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "lightskyblue",
  },
});
export default SignUpPage;
