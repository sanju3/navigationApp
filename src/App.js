import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './routes/Route';

const App = () => {
  return (
    <SafeAreaProvider>
      <Route />
    </SafeAreaProvider>
  );
};

export default App;
