import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { posts } from "./WPAPI";

function NewsFeed() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    console.log("Hi");
    const results = Object.entries(posts());
    setItems(results.map((each) => each.content));
    console.log("How are you");
  }, []);

  return (
    <View>
      {items}
      <Text>This is the NewsFeed Page!</Text>
    </View>
  );

  //   const generateList = props.ourPosts.map((elements) => (
  //     <View>
  //       <Text>{elements}</Text>
  //     </View>
  //   ));
  //   return (
  //     <View>
  //       <Text>NewsFeed</Text>
  //       <ScrollView>
  //         <View>{generateList}</View>
  //       </ScrollView>
  //     </View>
  //   );
}

export default NewsFeed;
