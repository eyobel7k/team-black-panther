import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ThemeLoggedOut from "./ThemeLoggedOut";
import { Text } from "react-native-elements";

function LogInPage({ navigation }) {
  return (
    <ThemeLoggedOut navigation={navigation}>
      <View style={styles.body}>
        <Text
          style={styles.headerText}
          name="Newsfeed"
          onPress={() => navigation.navigate("Newsfeed")}
        >
          Newsfeed
        </Text>
        <View style={styles.ImageBorder}>
          <Text h2 style={styles.bodyText}>
            Join the fun ..
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://i.pravatar.cc/300" }}
              style={{ height: "10%", width: "100%" }}
            />
          </View>
        </View>
        <View style={styles.LogInBorder}>
          <Text h3 style={styles.bodyText}>
            Login
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#1722e8"
              // onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#1722e8"
              secureTextEntry={true}
              // onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.bodyText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot_button} style={styles.bodyText}>
              Forgot Password?{" "}
              <Text
                name="ResetPasswordPage"
                onPress={() => navigation.navigate("ResetPasswordPage")}
              >
                Click here.
              </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot_button} style={styles.bodyText}>
              Don't have an account?
              <Text
                name="SignUpPage"
                onPress={() => navigation.navigate("SignUpPage")}
              >
                Sign Up
              </Text>
              here.
            </Text>
          </TouchableOpacity>
        </View>
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
    height: "100%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: Platform.OS === "web" ? "row" : "column",
    // margin: 20,
    // padding: 40, 
  },
  bodyText: {
    color: "#1722e8",
  },
  LogInBorder: {
    // border: "solid",
    borderStyle: "solid",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "white",
    // width: "100%",
    // height: "100%",
    color: "#e9e9f5",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  ImageBorder: {
    // border: "solid",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "white",
    // width: "100%",
    // height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
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
    alignItems: "center",
  },

  forgot_button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  loginBtn: {
    width: "20%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: "lightskyblue",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    margin: 10,
  },
});
export default LogInPage;
