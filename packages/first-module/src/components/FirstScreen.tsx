import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, Button, View } from 'react-native';

export const FirstScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>{'This is the First Screen'}</Text>
      <Button
        onPress={() =>
          navigation.navigate('SECOND_MODULE_MAIN', {
            screen: 'SM_FIRST',
          })
        }
        title="Vai allo stack del second-module"
      />
    </View>
  );
};
