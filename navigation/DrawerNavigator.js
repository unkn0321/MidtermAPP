import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Account from '../Screen/Account';
import Settings from '../Screen/Settings';
import StackNavigator from './StackNavigator';

const drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
    <drawer.Navigator initialRouteName='Home'
    screenOptions={{
        headerShown:true,
        title:'iNews',
        headerTitleAlign:'center',
        headerStyle: {
            backgroundColor:'#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.9,
            elevation: 8,},
    }} 
    >
        <drawer.Screen name='Home' component={StackNavigator} options={{drawerLabel:'首頁'}}/>
        <drawer.Screen name='Account' component={Account} options={{drawerLabel:'帳戶'}}/>
        <drawer.Screen name='Settings' component={Settings} options={{drawerLabel:'設定'}}/>
    </drawer.Navigator>
    )
}
export default DrawerNavigator;