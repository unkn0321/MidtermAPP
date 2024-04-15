import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Home_RecommendedNews=()=> {
  return (
      <View style={styles.newsSlot}/*分類瀏覽攔*/>

        <Text style={styles.frameTitle}>推薦閱讀</Text>

        <View style={styles.newsSlot.Frame}/*包含所有新聞的大框架*/>
            
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29397801.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>王品集團初瓦、嚮辣食物中毒延燒</Text>
                <Text style={styles.newsSlot.slot.title}>今再增34例身體不適就醫</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29397801.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>王品集團初瓦、嚮辣食物中毒延燒</Text>
                <Text style={styles.newsSlot.slot.title}>今再增34例身體不適就醫</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29397801.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>王品集團初瓦、嚮辣食物中毒延燒</Text>
                <Text style={styles.newsSlot.slot.title}>今再增34例身體不適就醫</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29397801.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>王品集團初瓦、嚮辣食物中毒延燒</Text>
                <Text style={styles.newsSlot.slot.title}>今再增34例身體不適就醫</Text>
            </View>
            </View>
            <View style={styles.newsSlot.slot}>
            <Image style={styles.newsSlot.slot.image} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29397801.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.newsSlot.slot.title}>王品集團初瓦、嚮辣食物中毒延燒</Text>
                <Text style={styles.newsSlot.slot.title}>今再增34例身體不適就醫</Text>
            </View>
            </View>

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
        marginVertical:10,

        backgroundColor: '#fff',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        elevation: 4,
        marginHorizontal:5,

        image:{
            width:150,
            height:75,
            marginHorizontal:20
        },
        title:{
            fontSize:15,
            fontWeight:'bold'
        }
      }
    },
  });
  export default Home_RecommendedNews;