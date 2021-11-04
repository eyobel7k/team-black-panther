import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { ThemeLoggedIn, Chat } from "./";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";

function Messages({ navigation }) {
  const [members, setMembers] = useState([]);
 
  const onPress = () => setMembers(prevembers => members.name)
  
  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.buddypress.members })
      .then((data) => setMembers(data))
      .catch((error) => console.log(error));
  }, []);

  console.log("Members", members);

  const listMembers = members.map((member, index) => (
    <View key={index} style={styles.inlineProfile}>
		<TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={member.avatar_urls.thumb} />
	  </TouchableOpacity>
      <Text>{member.name}</Text>
    </View>
  ));

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>
            <Chat />
          </Text>
        </View>
        {listMembers}
      </View>
    </ThemeLoggedIn>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    backgroundColor: "#fff",
    height: "80%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    margin: 5,
    fontSize: "1.5em",
    fontWeight: 100,
    fontFamily: "Serif",
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 50,
    alignItems: "flex-end",
  },
  inlineProfile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flext-center",
    marginBottom: 5,
  },
});

export default Messages;
