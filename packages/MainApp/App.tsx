/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FirstModuleNavigator} from '@rn-mono/first-module';
import {SecondModuleNavigator} from '@rn-mono/second-module';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FIRST_MODULE_MAIN"
          component={FirstModuleNavigator}
        />
        <Stack.Screen
          name="SECOND_MODULE_MAIN"
          component={SecondModuleNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
