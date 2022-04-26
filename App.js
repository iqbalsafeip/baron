/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/utils/redux/index';

const Stack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {screens.map((screen, i) => (
              <Stack.Screen
                options={{headerShown: false}}
                key={i}
                name={screen.name}
                component={screen.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
