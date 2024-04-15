import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import NewsDetail from '../Screen/NewsDetail';
import SortNews from '../Screen/SortNews';

const Stack=createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='BottomTabNavigator'
    screenOptions={{headerShown:false}}>
    
    <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    <Stack.Screen name="NewsDetail" component={NewsDetail} />
    <Stack.Screen name="SortNews" component={SortNews} />
    </Stack.Navigator>
  );
}



