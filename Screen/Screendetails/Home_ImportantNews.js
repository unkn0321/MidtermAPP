import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsDetail from "../NewsDetail";

const Stack=createStackNavigator();

const Home_ImportantNews=({navigation})=> {

  return (
      <View style={{flexDirection:'column',marginTop:5}}/*重點新聞攔(框架)*/>
        <View style={{flexDirection:'row'}}/*重點新聞攔(標題)*/>
          <Text style={styles.frameTitle}>重點新聞</Text>
          <Text style={{justifyContent:'flex-end',marginRight:8,marginLeft:290,marginTop:15}}>查看更多</Text>
        </View>
        <ScrollView horizontal={true}/*重點新聞攔(設置成可以水平滑動的區塊)*/>
          <View style={styles.importantNewsBar}/*重點新聞攔(區塊內容)*/> 
          
            <TouchableOpacity onPress={() => navigation.navigate('NewsDetail')}> 
            <View style={styles.newsPreviewSlot}>
            <Image
                source={{ uri: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399353.png&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1" }}
                style={styles.newsPreviewSlot.image} 
              />
            <Text style={styles.newsPreviewSlot.title}>新加坡夫妻家屬抵花蓮</Text>
            <Text style={styles.newsPreviewSlot.title}>提供2人衣物盼盡快找到</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.newsPreviewSlot}>
            <Image
                source={{ uri: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29398538.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1" }}
                style={styles.newsPreviewSlot.image} 
              />
            <Text style={styles.newsPreviewSlot.title}>花蓮大地震捐款破2.8億</Text>
            <Text style={styles.newsPreviewSlot.title}>明起可至四大超商捐款</Text>
            </View>

            <View style={styles.newsPreviewSlot}>
            <Image
                source={{ uri: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399298.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1" }}
                style={styles.newsPreviewSlot.image} 
              />
            <Text style={styles.newsPreviewSlot.title}>北濱街「軟腳蝦」明開拆</Text>
            <Text style={styles.newsPreviewSlot.title}>天王星大樓將挺進拆8樓</Text>
            </View>
          </View>
        </ScrollView>
      </View>
  );
}

const navigation=()=>{
  <Stack.Navigator>
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
  </Stack.Navigator>
}



const styles = StyleSheet.create({
    importantNewsBar:{
      flexDirection:'row',
      justifyContent:'flex-start',
      margin:5,
    },

    frameTitle:{
      fontWeight:'bold',
      fontSize:20,
      marginTop:8,
      marginLeft:8,
      marginBottom:8
    },

    newsPreviewSlot:{
      flexDirection:'column',
      justifyContent:'center',
      marginBottom:5,
      marginHorizontal:5,

      backgroundColor: '#fff',
      borderRadius:20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.5,
      elevation: 4,
      padding:10,

      image:{
        width:200,
        height:100,
        marginLeft:10,
        marginRight:10,
        marginVertical:10,
      },
      title:{
        fontSize:16.5,
        fontWeight:'bold',
        marginLeft:10,
      }
    }
    });
  export default Home_ImportantNews;