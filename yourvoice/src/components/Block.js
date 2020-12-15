import React from 'react';
import {Image, Button} from 'react-native-elements';
import Article from '../screens/Article';

import { TouchableOpacity, Text, StyleSheet, View, _View } from 'react-native';

const Block = ({item, handleOnPress}) => {
  const backgroundColor = item.type === 'private' ? '#E55E40' : '#1A9326';


  return(
      <TouchableOpacity style={[styles.item,  {borderRadius:10, flex:1, flexDirection:'row'}]} onPress={handleOnPress}>
        <View style={{flex:2, padding:10}}>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{backgroundColor:backgroundColor, borderRadius:20, width:60, marginHorizontal:4}}>
                  <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:16, marginHorizontal:2}}>{item.type}</Text></View>
                  <Text style={{color:'#70747A', fontWeight:'bold', fontSize:16, marginHorizontal:2}}>{item.date}</Text>
          </View>
          <View style={{flex:4, padding:4}}>
            <Text style={{fontSize:17, fontWeight:'bold'}}>{item.title}</Text>
            <Text style={{color:'#70747A', fontSize:12, marginHorizontal:2}}>{item.text}</Text>
          </View>
        </View>
        <View style={{flex:2}}>
          <Image source={{uri:item.url}} style={{height: 150,
                                            width:150,
                                            marginVertical:4}}/>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
item: {
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  backgroundColor:'#FFFFFF'
},
title: {
  fontSize: 24
}
});


export { Block };