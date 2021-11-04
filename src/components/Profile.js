import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { wpApiFetch, WPAPI_PATHS } from '../services/WPAPI';
import { ThemeLoggedIn } from './';

const Profile = ({ navigation }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.wp.users })
      .then(response => {
        console.log(response);
        setProfileInfo(response.at(0));
      });
  }, []); // runs onMount only

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View
        style={styles.profileContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.profileInfoContainer}>
          <Image 
            source={profileInfo.avatar_urls?.["96"]} 
            style={{
              minWidth: width > 300 ? 200 : 250,
              minHeight: width > 300 ? 200: 250,
              height: '50%',
              width: '50%',
              borderRadius: '100%'
            }}
          />
          <Text style={styles.h2}>{profileInfo.name}</Text>
          <Text style={styles.h3}>Avengers Tower, New York City</Text>
          <TouchableOpacity
            style={styles.pillButton}
            onPress={() => console.log('pressed edit profile!')}
          >
            <Text>edit profile</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.profileAboutContainer}>
          <Text style={styles.h3}>About</Text>
          <View style={styles.profileAbout}>
            <Text>{profileInfo.description}</Text>
          </View>
        </View>
      </View>
    </ThemeLoggedIn>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: "wrap",
  },
  profileInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%', 
    margin: 10,
    minWidth: 300,
  },
  profileAboutContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    minWidth: 300,
  },
  profileAbout: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
    margin: 20,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'whitesmoke',
  },
  pillButton: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  h2: {
    fontSize: 'xx-large',
    fontWeight: 'bold',
    color: 'blue',
    paddingTop: 20, 
    paddingHorizontal: '10%',
  },
  h3: {
    fontSize: 'large',
    fontWeight: 'bold',
    color: 'gray', 
    padding: 10,
  }
});

export default Profile;