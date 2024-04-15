import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {NavigationContainer}from'@react-navigation/native';
import{createStackNavigator}from'@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Main_ImportantNews from "./Screendetails/Home_ImportantNews"
import Main_TodayInfo from "./Screendetails/Home_TodayInfo"
import Main_SortNews from "./Screendetails/Home_SortNews"
import Main_RecommendedNews from "./Screendetails/Home_RecommendedNews"
import NewsDetail from "./NewsDetail";
import SortNews from "./SortNews";


const Home=({navigation})=>{
  //const navigation=useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.mainPageContent}>
      <Main_ImportantNews navigation={navigation} />
      <Main_TodayInfo />
      <Main_SortNews navigation={navigation}/>
      <Main_RecommendedNews />
    </ScrollView>
  );
}

const navigation=()=>{
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="NewsDetail" component={NewsDetail}/>
      <Stack.Screen name="SortNews" component={SortNews}/>
    </Stack.Navigator>
  </NavigationContainer>
}


const styles = StyleSheet.create({
    mainPageContent: {
      flexDirection:'column',
      justifyContent: 'center',
    },
  });
  export default Home;