import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Video from '../Screen/Video';
import Stock from '../Screen/Stock';
import Radio from '../Screen/Radio';
import NewsDetail from '../Screen/NewsDetail';
import SortNews from '../Screen/SortNews';

const bottomTab=createBottomTabNavigator();
const Stack=createStackNavigator();

export default function BottomTabNavigator() {
  return (
      <bottomTab.Navigator
      initialRouteName='Home'>
        <bottomTab.Screen name='Home' component={Home} 
        options={
          {headerShown:false,
          title:"首頁",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='home' color={color} size={40} marginTop={10}/>
          ),
          tabBarStyle:{
            height:80,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom:10
          },
          tabBarActiveTintColor: "gray",
          tabBarInactiveTintColor: "black",
          }}/>
        <bottomTab.Screen name='Video' component={Video}
        options={
          {headerShown:false,
          title:"影音",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='video' color={color} size={40} marginTop={10}/>
          ),
          tabBarStyle:{
            height:80,
          },
          tabBarLabelStyle: {
            fontSize: 16, 
            marginBottom:10
          },
          tabBarActiveTintColor: "gray", // 設置選中標籤的文字顏色為藍色
          tabBarInactiveTintColor: "black", // 設置未選中標籤的文字顏色為黑色
          }}/>
        <bottomTab.Screen name='Radio' component={Radio}
        options={
          {headerShown:false,
          title:"廣播",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='radio' color={color} size={35} marginTop={10}/>
          ),
          tabBarStyle:{
            height:80,
          },
          tabBarLabelStyle: {
            fontSize: 16, // 設置標籤文字的大小為16
            marginBottom:10
          },
          tabBarActiveTintColor: "gray", // 設置選中標籤的文字顏色為藍色
          tabBarInactiveTintColor: "black", // 設置未選中標籤的文字顏色為黑色
          }}/>
        <bottomTab.Screen name='Stock' component={Stock}
          options={
          {headerShown:false,
          title:"股市",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='finance' color={color} size={35} marginTop={10}/>
          ),
          tabBarStyle:{
            height:80,
          },
          tabBarLabelStyle: {
            fontSize: 16, // 設置標籤文字的大小為16
            marginBottom:10,
          },
          tabBarActiveTintColor: "gray", // 設置選中標籤的文字顏色為藍色
          tabBarInactiveTintColor: "black", // 設置未選中標籤的文字顏色為黑色
          }}/>
      </bottomTab.Navigator>
  );
}


function StackNavigator() {
  <Stack.Navigator>
    <Stack.Screen name="BottomTabNavigator=" component={BottomTabNavigator} />
    <Stack.Screen name="NewsDetail" component={NewsDetail} />
    <Stack.Screen name="SortNews" component={SortNews} />
  </Stack.Navigator>;
}

