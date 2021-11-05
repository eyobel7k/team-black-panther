import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Authentication () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
        .then(setLoading(false))
        .then(data => data.message? setError(data.message):'');
      }
    },
    [loading]
  );

	const onFormSubmit = () => {
    setError('');
    setLoading(true);
	};

	return (
    <View>
      {loggedIn 
        ? <View>loggedin</View>
        : (
          <View>
              <Text style={{ fontWeight: 'bold' }}>Login</Text>
              <Text>Username:</Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={onFormSubmit}
              />
              <Text>Password:</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={onFormSubmit}
                secureTextEntry={true}
              />
              <Button
                onPress={() => onFormSubmit()}
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
