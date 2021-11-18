import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ThemeLoggedIn from "./ThemeLoggedIn";
import Chat from "./Chat";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";
import { Text } from "react-native-elements";

function Messages({ navigation, loggedInUserData }) {
  const [members, setMembers] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [loading, setLoading] = useState(true);

  const onPress = (selectedMemberId) => {
    setSelectedMember(members[selectedMemberId]);
  };

  useEffect(() => {
    wpApiFetch({
      path: WPAPI_PATHS.buddypress.members,
      token: loggedInUserData.token,
    }).then((data) => {
      setMembers(data);
      console.log("Members", data);
    });
    wpApiFetch({
      path: WPAPI_PATHS.buddypress.messages,
      token: loggedInUserData.token,
    }).then((data) => {
      // setMembers(data);
      setMyMessages(data);
      console.log("Messages", data);
      setLoading(false);
    });
  }, []);

  const newMembers = members?.map((member, index) => (
    <Picker.Item label={member.name} key={index} value={member.name} />
  ));

  return (
    <ThemeLoggedIn navigation={navigation} loggedInUserData={loggedInUserData}> 
      <View style={styles.container}>
        <View style={styles.title}>
          <Text h4> Space Chat</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>
            <Picker
              selectedValue={
                selectedMember.name ? selectedMember.name : "Select"
              }
              style={{
                height: 50,
                width: 170,
                backgroundColor: "#d2d2d6",
                color: "#6c72d9",
                borderRadius: 35,
              }}
              onValueChange={(member, itemIndex) => {
                setSelectedMember(members[itemIndex]);
              }}
            >
              {newMembers}
            </Picker>
            {Object.keys(selectedMember).length !== 0 && (
              <View style={styles.img}>
                {console.log(selectedMember)}
                <View styles={styles.pick}>
                  <Image
                    source={{ uri: selectedMember.avatar_urls?.thumb }}
                    style={styles.image}
                  ></Image>

                  <Text>{selectedMember.name}</Text>
                </View>
              </View>
            )}

            <Chat
              myMessages={myMessages}
              loggedInUserData={loggedInUserData}
              members={members}
              selectedMember={selectedMember}
            />
          </Text>
        </View>
        {loading && <Text style={styles.loadingText}>Loading . . .</Text>}
        {/* {listMembers} */}
      </View>
    </ThemeLoggedIn>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efd595",
  },
  body: {
    backgroundColor: "#efd595",
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
    width: 50,
    height: 50,
    marginRight: 2,
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
  pick: {
    paddingTop: 5,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default Messages;
