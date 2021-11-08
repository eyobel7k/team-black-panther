import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Authentication ({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  useEffect(
    () => {
      if(loading) {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'username': `${username}`,
            'password': `${password}`
          })
        };
        
        fetch(`https://jualuc1.dreamhosters.com/wp-json/jwt-auth/v1/token`, options)
        .then(response => response.json())
        .then(data => {
          data.token 
            ? formSuccess(data)
            : formError(data)
        })
      }
    },
    [loading]
  );

	const onFormSubmit = () => {
    setError('');
    setLoading(true);
	};

  const formSuccess = (data) => {
    setToken(data.token);
    setLoggedin(true);
    setLoading(false);
    setUsername('');
    setPassword('');
    navigation.navigate('Newsfeed');
  }

  const formError = (data) => {
    setLoading(false);
    setPassword('');
    data?.message 
      ? setError(
        data.message
          .replaceAll("<strong>", "")
          .replaceAll("</strong>", "")
          .replaceAll("<a>", "")
          .replaceAll("</a>", "")
          .replaceAll("<a href=", "")
          .replaceAll(">", "")
      )
      :'';
    console.log(data);
  }

	return (
    <View style={styles.container}>
      {loggedIn 
        ? <View>
          <Text>Logged In</Text>
        </View>
        : (
          <View>
              <Text style={{ fontWeight: 'bold' }}>Login</Text>
              <Text>Username:</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={onFormSubmit}
              />
              <Text>Password:</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={onFormSubmit}
                secureTextEntry={true}
              />
              <Button
                onPress={onFormSubmit}
                title="Login"
              />
              <Text>{loading && 'Loading'}</Text>
              <Text>{error}</Text>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    maxWidth: 300
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});