import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const SortNews=()=>{
  return (

    <ScrollView>
        <View>
            <Text style={styles.frameTitle}>0403地震</Text>
        </View>

        <View style={{height:3,backgroundColor:"#a9a9a9",marginBottom:10,marginHorizontal:5}}></View>

        <View style={styles.newsSlot.Frame}/*包含所有新聞的大框架*/>

            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399353.png&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
            <Text style={styles.newsSlot.slot.title}>新加坡夫妻家屬抵花蓮</Text>
            <Text style={styles.newsSlot.slot.title}>提供2人衣物盼盡快找到</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/98/29399903.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=465&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>花蓮強震刷坡女工沒躲過落石</Text>
                <Text style={styles.newsSlot.slot.title}>夫淚崩：慘死我懷裡</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399824.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>南機場整宅地震受損 </Text>
                <Text style={styles.newsSlot.slot.title}>綠委：中央允諾興建社宅做中繼</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399769.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>花蓮強震不放棄失聯6人</Text>
                <Text style={styles.newsSlot.slot.title}>搜救人員冒險持續推進開挖</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399749.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>地震後撤離...新北提供7天住宿</Text>
                <Text style={styles.newsSlot.slot.title}>災民嘆：對未來很茫然</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399563.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>善心人掏10萬元救助！</Text>
                <Text style={styles.newsSlot.slot.title}>受災戶哽咽常捐款今反被救濟</Text>
            </View>
            </View>

        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
        frameTitle:{
          fontWeight:'bold',
          fontSize:20,
          marginTop:10,
          marginLeft:20,
          marginBottom:8
        },
    
        newsSlot:{
          flexDirection:'column',
          Frame:{
            justifyContent:'flex-start',
            flexDirection:'column',
            title:{
              marginLeft:20,
              marginBottom:5,
              fontSize:15
            }
          },
          slot:{
            flexDirection:'row',
            marginVertical:8,
            height:100,

            backgroundColor: '#fff',
            borderRadius:20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.5,
            elevation: 4,
            marginHorizontal:5,
    
            image:{
                width:150,
                height:100,
                marginHorizontal:20
            },
            title:{
                fontSize:16,
                fontWeight:'bold',
            }
          }
        }}
    );
  export default SortNews;