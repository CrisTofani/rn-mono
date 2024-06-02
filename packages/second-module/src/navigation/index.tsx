import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen } from '../components/FirstScreen';

const Stack = createStackNavigator();

export const SecondModuleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SM_FIRST" component={FirstScreen} />
  </Stack.Navigator>
);
