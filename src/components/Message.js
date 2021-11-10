import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ThemeLoggedIn  from "./ThemeLoggedIn";
import Chat from "./Chat";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";

function Messages({ navigation }) {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const onPress = (selectedMemberId) => {
    setSelectedMember(members[selectedMemberId]);
  };

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.buddypress.members })
      .then((data) => {
        setMembers(data);
        console.log(data);
      })

      .catch((error) => console.log(error));
  }, []);

  console.log("Members", members);

  const listMembers = members?.map((member, index) => (
    <View key={index} style={styles.inlineProfile}>
      <TouchableOpacity onPress={() => onPress(index)}>
        <Image style={styles.image} source={{uri:member.avatar_urls.thumb}} />
      </TouchableOpacity>
      <Text>{member.name}</Text>
    </View>
  ));

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>
            {Object.keys(selectedMember).length !== 0 && (
              <View style={styles.img}>
                {console.log(selectedMember)}
                <Image
                  source={{uri:selectedMember.avatar_urls?.thumb}}
                  style={styles.image}
                ></Image>
                <Text>{selectedMember.name}</Text>
              </View>
            )}

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
    // height: "10%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    margin: 5,
    fontSize: 14,
    fontWeight: "bold",
    // fontFamily: "Serif",
  },

  image: {
    width: 10,
    height: 10,
    marginRight: 10,
    alignItems: "baseline",
    
  },
  img: {
    justifyContent: "center",
  },
  inlineProfile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
});

export default Messages;
