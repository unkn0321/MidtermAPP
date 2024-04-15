import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {TouchableOpacity } from "react-native";

const Home_SortNews=({navigation})=> {
  return (
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.frameTitle}>我想看...</Text>
            <Text style={{justifyContent:'flex-end',marginRight:8,marginLeft:290,marginTop:15}}>查看更多</Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={{flexDirection:'row', margin:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('SortNews')}> 
            <View style={styles.sort}>
              <Image source={require('./SortIcons/earthquake.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>0403地震</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/WowPrime.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>王品集團</Text>
            </View>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/PoLam.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>寶林茶室</Text>
            </View>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/Mazu.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>大甲媽祖</Text>
            </View>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/finance.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>財經金融</Text>
            </View>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/society.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>社會地方</Text>
            </View>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/global.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>國際脈動</Text>
            </View>
            <View style={styles.sort}>
              <Image source={require('./SortIcons/entertainment.png')} style={styles.sort.image}/>
              <Text style={styles.sort.text}>娛樂八卦</Text>
            </View>
        </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    frameTitle:{
      fontWeight:'bold',
      fontSize:20,
      marginTop:15,
      marginLeft:8,
    },

    sort:{
      flexDirection:'column',
      marginHorizontal:10,
      padding:10,
      
      backgroundColor: '#fff',
      borderRadius:20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.5,
      elevation: 4,

      image:{
        width:35,
        height:35,
        justifyContent:'center',
        marginLeft:14,
      },
      text:{
        marginVertical:10,
        fontSize:15,
        justifyContent:'center',
      }
    },
  });
  export default Home_SortNews;