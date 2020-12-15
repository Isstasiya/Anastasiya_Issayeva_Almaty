import React from 'react';
import {Image, Button} from 'react-native-elements';

import { TouchableOpacity, Text, StyleSheet, View, _View } from 'react-native';

const Item = ({item, url, backgroundColor, buttonColor, textColor, labelColor, handleOnPress}) => {
    return(
        <View style={[styles.item,  { backgroundColor, borderRadius:10, flex:1, flexDirection:'row'}]}>
          <View style={{flex:1}}>
            <Image source={{uri:url}} style={{height: 114,
                                              width:94,
                                              marginVertical:4}}/>
          </View>
          <View style={{flex:2, padding:10}}>
          <Text style={{color:labelColor, fontSize:28, fontWeight:'bold'}}>{item.title}</Text>
          <Button title="Start" buttonStyle={{width:100, borderRadius:25, backgroundColor:buttonColor, marginTop:4}}
                                       titleStyle={{color:textColor}} onPress={handleOnPress}/>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24
  }
});


export { Item };