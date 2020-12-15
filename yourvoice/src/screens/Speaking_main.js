import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Item } from '../components';
import { Avatar, Image, Button} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Speaking',
    url:'asset:/images/animal_speak.png'
  },
  {
    id: '2',
    title: 'Games',
    url:'asset:/images/family_speak.png'
  },
  {
    id: '3',
    title: 'Exercises',
    url:'asset:/images/hobbies_speak.png'
  },
]

const Speaking_main = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return(
      <Item item={item} url={item.url} backgroundColor={"#FFF8EF"} buttonColor={'#FEE161'} textColor={'#979797'} labelColor={'#000000'} handleOnPress = {()=> navigation.navigate('Details')}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:2, marginHorizontal: 8, marginVertical: 8}}>
    <Image source={{ uri: 'asset:/images/ko_phys.png'}}
        style={{height: 200,
        borderRadius:25}}/>
    </View>
        <View style={{flex:4, marginHorizontal:8, marginVertical:8}}>
            <View style={{flex:1, flexDirection:'row', marginVertical:8}}>
              <Text style={{flex:4, color:'#CE7F1A', fontSize: 28, fontWeight: 'bold'}}>Popular</Text>
              <Text style={{flex:1, color:'#979797', fontSize: 22, fontWeight: 'bold', marginTop:6}}>More</Text>
            </View>
            <View style={{flex:4}}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              /></View>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF8EF'
  }
});

export default Speaking_main;