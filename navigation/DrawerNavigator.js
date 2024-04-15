import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerItemList,DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Account from '../Screen/Account';
import Settings from '../Screen/Settings';
import Favorite from '../Screen/Favorite';
import StackNavigator from './StackNavigator';

const drawer=createDrawerNavigator();

const CustomDrawerContent=(props)=>{
    return(
        <DrawerContentScrollView{...props}>
        <Image source={require('../assets/userBackground.png')}
         style={{width:300,height:250}}/>
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

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
    drawerContent={props=><CustomDrawerContent{...props}/>}
    >
        <drawer.Screen name='Home' component={StackNavigator}
         options={{drawerLabel:'首頁',
         drawerIcon:({color})=>(
            <MaterialCommunityIcons name='home' color={color} size={30}/>
          ),
          drawerActiveTintColor: "gray",
          drawerInactiveTintColor: "black",
         }}/>
        <drawer.Screen name='Account' component={Account}
         options={{drawerLabel:'帳戶',
         drawerIcon:({color})=>(
            <MaterialCommunityIcons name='account-circle' color={color} size={30}/>
          ),
          drawerActiveTintColor: "gray",
          drawerInactiveTintColor: "black",
         }}/>
        <drawer.Screen name='Settings' component={Settings}
         options={{drawerLabel:'設定',
         drawerIcon:({color})=>(
            <MaterialCommunityIcons name='cog' color={color} size={30}/>
          ),
          drawerActiveTintColor: "gray",
          drawerInactiveTintColor: "black",
         }}/>
        <drawer.Screen name='Favorite' component={Favorite}
         options={{drawerLabel:'收藏',
         drawerIcon:({color})=>(
            <MaterialCommunityIcons name='cards-heart' color={color} size={30}/>
          ),
          drawerActiveTintColor: "gray",
          drawerInactiveTintColor: "black",
         }}/>
    </drawer.Navigator>
    )
}
export default DrawerNavigator;