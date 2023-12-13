import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/main';
import ObjectDetailsScreen from './components/objectDetailedScreen';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ObjectDetailsScreen" component={ObjectDetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;