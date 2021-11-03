import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { WPAPI_PATHS, wpApiFetch } from '../services/WPAPI';
import { ThemeLoggedIn } from './';

export default function Members ({ navigation }) {
  const [members, setMembers] = useState([]);

  useEffect(
    () => {
      wpApiFetch({path: WPAPI_PATHS.buddypress.members})
        .then(data => setMembers(data))
        .catch(error => console.log(error))
    },
    []
  );

  console.log('Members', members);

  const listMembers = members.map(
    (member, index) => (
      <View key={index} style={styles.inlineProfile}>
        <Image style={styles.image} source={member.avatar_urls.thumb} />
        <Text>{member.name}</Text>
      </View>
    )
  )

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View>
        {listMembers}
      </View> 
    </ThemeLoggedIn>
  )
}

const styles = StyleSheet.create({
  inlineProfile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flext-start',
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  }
});