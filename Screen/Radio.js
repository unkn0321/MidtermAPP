import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Radio() {


  return (
    <View style={{ flex: 1,backgroundColor: '#fff' }}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>廣播電台</Text>
      </View>
    </View>
  );
}

export default Radio;