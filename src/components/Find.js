import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { wpApiFetch, WPAPI_PATHS } from "../services/WPAPI";
import ThemeLoggedIn from "./ThemeLoggedIn";

const Find = ({ navigation, loggedInUserData }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.buddypress.members })
      .then((data) => {
        setFilteredDataSource(data);
        setMasterDataSource(data);
      })

      .catch((error) => console.log(error));
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.name ? item.name.toLowerCase() : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.name.toLowerCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  const getItem = (item) => {
    // Function for click on an item
    alert("   Profile Name: " + item.name + " Id : " + item.id);
  };

  return (
    <ThemeLoggedIn navigation={navigation} loggedInUserData={loggedInUserData}>
      <View style={styles.container}>
        <View>
          <SearchBar
            style={styles.searchBar}
            round
            searchIcon={{ size: 24 }}
            padding={10}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="Search super friends..."
            value={search}
          />
        </View>
        <View>
          <Image
            source={{ uri: selectedMember.avatar_urls?.thumb }}
            style={styles.image}
          ></Image>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </View>
    </ThemeLoggedIn>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    backgroundColor: "#c5834c",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: "center",
    marginHorizontal: 45,
  },
  itemStyle: {
    padding: 10,
  },
  searchBar: {
    backgroundColor: "#efd595",
  },
});

export default Find;
