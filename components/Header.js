import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { navigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();
  return (
    <View style={{ display: "inline-block" }}>
      <Button
        title="NewsFeed"
        onPress={() => navigation.navigate("NewsFeed")}
      />
      <Button
        title="PasswordReset"
        onPress={() => navigation.navigate("PasswordReset")}
      />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

export default Header;
