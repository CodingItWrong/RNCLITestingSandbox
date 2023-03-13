// SafeAreaView fails without React import in CLI for some reason

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import api from './api';

export default function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    api.get('restaurants').then(response => setRestaurants(response.data));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello, React Native!</Text>
        {restaurants.map(r => (
          <Text key={r.id}>{r.name}</Text>
        ))}
      </SafeAreaView>
    </>
  );
}
