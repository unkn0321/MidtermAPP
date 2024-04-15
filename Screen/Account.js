import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Account() {


  return (
    <View style={{ flex: 1,backgroundColor: '#fff' }}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>帳戶</Text>
      </View>
    </View>
  );
}

export default Account;