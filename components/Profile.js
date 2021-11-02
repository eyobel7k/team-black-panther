import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { wpApiFetch, WPAPI_PATHS } from './WPAPI';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const { height, width } = useWindowDimensions();

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
          style={{
            minWidth: 200,
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
    padding: 10,
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