/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {multiply} from '@rn-mono/first-module';
import {SecondModuleNavigator} from '@rn-mono/second-module';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  multiply(1, 2)
    .then(_ => console.log(`multiply ${_}`))
    .catch(_ => console.log('error'));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SECOND_MODULE_MAIN"
          component={SecondModuleNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
