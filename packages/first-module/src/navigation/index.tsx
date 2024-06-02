import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen } from '../components/FirstScreen';

const Stack = createStackNavigator();

export const FirstModuleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="FM_FIRST" component={FirstScreen} />
  </Stack.Navigator>
);
