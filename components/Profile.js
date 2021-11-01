import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { wpApiFetch, WPAPI_PATHS } from './WPAPI';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.users })
      .then(response => {
        setProfileInfo(response.at(0));
      });
  });

  return (
    <ScrollView
      style={styles.profileContainer}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <View style={styles.profileInfoContainer}>
        <Image 
          source={profileInfo.avatar_urls?.["96"]} 
          style={{ height: '50%', width: '100%', borderRadius: 10 }}
        />
        <Text>{profileInfo.name}</Text>
        <Text>Avengers Tower, New York City</Text>
        <TouchableOpacity
          style={styles.pillButton}
          onPress={() => console.log('pressed edit profile!')}
        >
          <Text>edit profile</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.profileAboutContainer}>
        <Text>About</Text>
        <View style={styles.profileAbout}>
          <Text>{profileInfo.description}</Text>
        </View>
      </View>
    </ScrollView>   
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#ED1D24',
  },
  scrollContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: "wrap",
  },
  profileContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  profileInfoContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  pillButton: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
});

export default Profile;