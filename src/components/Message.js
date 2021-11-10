import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import ThemeLoggedIn from "./ThemeLoggedIn";
import Chat from "./Chat";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";



// const [selectedValue, setSelectedValue] = useState("java");
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
        // console.log(data);
      })

      .catch((error) => console.log(error));
  }, []);

  console.log("Members", members);

  // const listMembers = members?.map((member, index) => (
  //   <View key={index} style={styles.inlineProfile}>
  //     <TouchableOpacity onPress={() => onPress(index)}>
  //       <Image
  //         style={styles.image}
  //         source={{ uri: member.avatar_urls.thumb }}
  //       />
  //     </TouchableOpacity>
  //     <Text>{member.name}</Text>
  //   </View>
  // ));
  
  
  members.map((member, index)=>
    <Text>member </Text>
  
  
  
  )

  return (
    

    <ThemeLoggedIn navigation={navigation}>

      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>

         


            
          <Picker
          
                    selectedValue={selectedMember.name ? selectedMember.name :'Iron Man'}
                    style={{ height: 50, width: 170, backgroundColor:'#535981',borderRadius:35,}}
                    onValueChange={(member, itemIndex) =>{
                      setSelectedMember(members[itemIndex])
                      // console.log(members[itemIndex])
                    }}
                  >
                    {/* <Picker.Item label="Friends " value=" Friends" /> */}
                    <Picker.Item label={"Iron Man"} value="Iron Man" />
                    <Picker.Item label="Spiderman" value="Spiderman" />
                    <Picker.Item label="Wolverine" value="Wolverine" />
                    <Picker.Item label="Xavier Mercado" value="Xavier Mercado" />
                    <Picker.Item label="Professor Xavier " value=" Professor Xavier" />
                    
                    
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

            <Chat />
          </Text>
        </View>
        {/* {listMembers} */}
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
    // fontFamily: "tho",
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
});

export default Messages;
