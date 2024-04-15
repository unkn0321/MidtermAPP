import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Home_TodayInfo=()=> {
  let tem=30;
  let rain=50;
  let weather='多雲';
  return (
      <View style={styles.categorySlot}/*分類瀏覽攔*/>
      <Text style={styles.frameTitle}>今日資訊</Text>
        <View style={styles.categorySlot.container}>
          <View style={{flexDirection:'column'}}>
            <Text style={styles.categorySlot.container.title}>最高氣溫：{tem}℃</Text>
            <Text style={styles.categorySlot.container.title}>降雨機率：{rain}%</Text>
            <Text style={styles.categorySlot.container.title}>當前天氣：{weather}</Text>
          </View>
        {/*<View style={{flexDirection:'column'}}>
            <Text style={styles.categorySlot.container.title}>今日幸運色：</Text>
            <Text style={styles.categorySlot.container.title}>今日幸運色：</Text>
            <Text style={styles.categorySlot.container.title}>今日幸運色：</Text>
          </View>*/}
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
    frameTitle:{
      fontWeight:'bold',
      fontSize:20,
      marginTop:8,
      marginLeft:8,
      marginBottom:8
    },

    categorySlot:{
      flexDirection:'column',
      container:{
        justifyContent:'flex-start',
        flexDirection:'row',
        paddingVertical:10,

        backgroundColor: '#fff',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        elevation: 4,
        marginHorizontal:10,

        title:{
          marginLeft:160,
          marginBottom:0,
          fontSize:15
        }
      }
    },
  });
  export default Home_TodayInfo;