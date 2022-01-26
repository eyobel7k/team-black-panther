import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";
import { Text, ListItem, Avatar } from "react-native-elements";

function Friends({ navigation, loggedInUserData }) {
  const [members, setMembers] = useState([]);
  const [wpMembers, setWPMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [selectedWPMember, setSelectedWPMember] = useState({});
  const [viewFriend, setViewFriend] = useState(false);
  const { height, width } = useWindowDimensions();
  const [description, setDescription] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.buddypress.members })
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })

      .catch((error) => {
        console.error('Error:', error);
      });
    wpApiFetch({ path: WPAPI_PATHS.wp.users }).then((data) => {
      setWPMembers(data);
    });
  }, []);

  const fetchDescription = (name) => {
    let chosenMember = wpMembers?.find((member) => member.name === name);
    setDescription(chosenMember?.description);
    setScrollToTop(true);
  };

  return (
    <ThemeLoggedIn navigation={navigation} scrollToTop={scrollToTop} loggedInUserData={loggedInUserData}>
      {!viewFriend && (
        <View style={styles.container}>
          <View style={styles.title}>
            {loading && <Text style={styles.loadingText}>Loading . . .</Text>}
            <Text h4>Members</Text>
          </View>
          <View style={styles.body}>
            {members.map((member, index) => (
              <ListItem
                Component={TouchableOpacity}
                onPress={() => {
                  setSelectedMember(member);
                  setViewFriend(true);
                  fetchDescription(member.name);
                }}
                label={member.name}
                key={index}
                value={member.name}
                bottomDivider
              >
                <Avatar source={{ uri: member.avatar_urls.full }} />

                <ListItem.Content>
                  <ListItem.Title>
                    {member.name}
                    {member.thumb}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="white" />
              </ListItem>
            ))}
          </View>
        </View>
      )}
      {viewFriend && (
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: selectedMember?.avatar_urls?.full }}
            style={[
              styles.profileImage,
              {
                maxWidth: width > 300 ? 200 : 150,
                maxHeight: width > 300 ? 200 : 150,
              },
            ]}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.h2}>{selectedMember.name}</Text>
          </View>
          <View style={styles.profileAboutContainer}>
            <View style={styles.profileAbout}>
              <Text>{description}</Text>
            </View>
          </View>
          <Pressable
            style={styles.refreshButton}
            onPress={() => setViewFriend(false)}
          >
            <Text>Refresh Page</Text>
          </Pressable>
        </View>
      )}
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
    width: "60%",
    textAlign: "center",
    justifyContent: "center",
    marginHorizontal: "20%",
    // alignItems: "center",
  },
  text: {
    margin: 5,
    fontSize: 14,
    fontWeight: "bold",
    // fontFamily: "Serif",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileImage: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
    marginBottom: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    minWidth: 300,
  },
  profileAboutContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 20,
    minWidth: 300,
  },
  profileAbout: {
    flex: 1,
    padding: 10,
    margin: 20,
    width: "30%",
    height: "100%",
    borderColor: "#c5834c",
    backgroundColor: "#efd595",
    textAlign: "center",
    // borderStyle: "solid",
    // borderColor: "black",
    // borderWidth: 2,
    // borderRadius: 20,
  },
  pillButton: {
    borderRadius: 10,
    backgroundColor: "#87cefa",
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  h2: {
    fontSize: 44, // was 'xx-large'
    fontWeight: "bold",
    color: "#000000",
    padding: 20,
    paddingHorizontal: "10%",
  },
  h3: {
    fontSize: 26, // was 'large'
    fontWeight: "bold",
    color: "#c5834c",
    padding: 10,
  },
  refreshButton: {
    padding: 10,
    marginTop: 160,
    marginBottom: 40,
    borderRadius: 40,
    backgroundColor: "#c5834c",
  },
  loadingText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Friends;
