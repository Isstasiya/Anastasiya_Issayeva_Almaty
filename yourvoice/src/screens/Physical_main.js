import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Item } from '../components';
import { Avatar, Image, Button} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Muscle Strenghthening',
    url: 'asset:/images/girl_phys.png'
  },
  {
    id: '2',
    title: 'Muscle Strenghthening',
    url: 'asset:/images/phys_main.png'
  },
  {
    id: '3',
    title: 'Muscle Strenghthening',
    url: 'asset:/images/girl_phys.png'
  },
]

const Physical_main = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return(
      <Item item={item} url={item.url} backgroundColor={"#BFD87B"} buttonColor={'#FFFFFF'} textColor={'#9BCE14'} labelColor={'#606C3E'} handleOnPress = {()=> navigation.navigate('Exercises')}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:2, marginHorizontal: 8, marginVertical: 8}}>
        <Image source={{ uri: 'asset:/images/all_phys.png'}}
        style={{height: 200,
        borderRadius:25}}/>
    </View>
        <View style={{flex:2, marginHorizontal:8, marginTop:28}}>
            <View style={{flex:2, flexDirection:'row', marginVertical:8}}>
              <Text style={{flex:4, color:'#CE7F1A', fontSize: 28, fontWeight: 'bold'}}>Recommended</Text>
              <Text style={{flex:1, color:'#979797', fontSize: 22, fontWeight: 'bold', marginTop:6}}>More</Text>
            </View>
            <View style={{flex:6, backgroundColor:'#BFD87B', borderRadius:25, flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Image source={{ uri: 'asset:/images/phys_main.png'}}
                                    style={{width: 80,
                                    height: 80,
                                    marginVertical:4,
                                    marginHorizontal:16,
                                    borderRadius:25}}/>
                </View>
                <View style={{flex:2, marginLeft:'auto', marginLeft:16}}><Text style={{fontWeight:'bold', fontSize:24, color:"#606C3E"}}>Muscle Strenghthening</Text></View>
            </View>
        </View>
            <View style={{flex:3}}>
            <View style={{flex:1, marginHorizontal:8}}><Text style={{color:'#CE7F1A', fontSize: 28, fontWeight: 'bold'}}>Personalized</Text></View>
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

export default Physical_main;