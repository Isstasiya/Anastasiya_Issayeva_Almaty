import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Block } from '../components';
import { Avatar, Image, Button, Input} from 'react-native-elements';
import HomeScreen from "./HomeScreen";
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();

const DATA = [
    {
      id: '1',
      title: 'ASD inclusive recipes',
      url: 'asset:/images/fruits.png',
      date: '15 dec',
      text: 'Many parents report that their children\'s autism symptoms and related medical issues improve when they remove...',
      type: 'private'
    },
    {
      id: '2',
      title: 'ASD MYTHS',
      url: 'asset:/images/myth.png',
      date: '15 dec',
      text: 'Myth: Autism is caused by bad parenting. Truth: In the 1950s, a theory called the “refrigerator mother hypothesis” ...',
      type: 'public'
    },
    {
      id: '3',
      title: 'Child’s sleep 101',
      url: 'asset:/images/sleep.png',
      date: '15 dec',
      text: 'Sleep problems are very common, reportedly as high as 80% in children with ASD. In typically developing children sleep problems0 ',
      type: 'public'
    },
  ]

const Usefull = ({navigation}) => {
    
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return(
      <Block item={item} handleOnPress = {()=> navigation.navigate('Article')}/>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={{flex:2}}>
            <Input placeholder='News, and more' leftIcon={<Icon name='magnifying-glass' size={24} color='black'/>} containerStyle={{backgroundColor:'#D7EBFE', borderRadius:20, height:60}}/>
            </View>
            <View style={{flex:1, flexDirection:'row', marginTop:20}}>
                <View style={{backgroundColor:'#E0AC6A', borderRadius:20, width:40, padding:2, marginHorizontal:12}}>
                <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:16, marginHorizontal:6}}>All</Text></View>
                <View style={{borderRadius:20, width:80, padding:2, marginHorizontal:12}}>
                <Text style={{color:'#7B7A85', fontSize:16}}>Nutrition</Text></View>
                <View style={{borderRadius:20, width:80, padding:2, marginHorizontal:12}}>
                <Text style={{color:'#7B7A85', fontSize:16}}>Shedule</Text></View>
                <View style={{borderRadius:20, width:80, padding:2, marginHorizontal:12}}>
                <Text style={{color:'#FF8A5C', fontWeight:'bold', fontSize:16}}>Filter</Text></View>
            </View>
        </View>
        <View style={styles.main}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFF8EF'
    },
    header: {
      flex: 2,
      marginHorizontal:28,
      marginVertical:16,
    },
    main: {
      flex: 8,
      marginHorizontal:28,
      marginVertical:4,
    }
  });
export default Usefull;