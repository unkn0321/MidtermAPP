import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const NewsDetail=({navigation})=>{

  return (
    <ScrollView>
        <View style={{flexDirection:'column',marginTop:20,marginHorizontal:10,justifyContent:'center'}}>
        <Text style={styles.newsTitle}>新加坡夫妻家屬抵花蓮 提供2人衣物盼盡快找到</Text>
        </View>
        <View style={{height:1,backgroundColor:"#a9a9a9",marginVertical:10,marginHorizontal:5}}></View>
            <View style={{flexDirection:'column'}}>
            <Image style={styles.newsPicture} source={{uri:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/08/realtime/29399353.png&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1"}}/>
            <Text style={{fontSize:15,color:"#8b94ab",marginHorizontal:25}}>新加坡夫妻家屬今天趕抵花蓮，提供2人衣物給特搜隊，盼盡快找到人。圖／花蓮縣消防局提供</Text>
            </View>
            <Text style={styles.newsContent}>
            花蓮強震至今目前有6人失聯，其中澳洲籍新加坡夫婦失蹤，
            搜救隊員出動7人3隻搜救犬，在太魯閣五間屋及三間屋之間搜救。
            據悉，妻子的姊姊與妹妹已經抵台，丈夫的妹妹也趕到台灣，並將2人衣物交給搜救隊員，
            盼能利用搜救犬盡快尋獲失聯夫妻倆。今天搜救隊兵分兩路，1組7人3犬前往五間屋2處崩壁搜索，
            卻沒有發現任何人影，估算星國夫妻腳程，有可能再往前700公尺，並在附近崩壁搜找也沒有結果。
            花蓮縣消防局特種搜救隊組長温宗豪說，今天有新加坡夫妻的家屬到花蓮，把2人衣物交給搜救隊員，
            讓搜救犬能聞味道，以利在搜救現場找人，希望能盡快尋獲失蹤的夫妻，讓家屬安心。
            </Text>        
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    newsTitle:{
        fontSize:39,
        fontWeight:'bold',
        justifyContent:'center',
    },
    newsPicture:{
        width:400,
        height:200,
        alignSelf:'center',
        marginVertical:10
    },
    newsContent:{
        fontSize:20,
        color:"#303d5c",
        marginHorizontal:15,
        marginVertical:20
    }
  });
  export default NewsDetail;