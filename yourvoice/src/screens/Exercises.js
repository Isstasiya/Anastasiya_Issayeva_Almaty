import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Block } from '../components';
import { Avatar, Image, Button, Input} from 'react-native-elements';
import HomeScreen from "./HomeScreen";
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();


const Exercises = ({navigation}) => {
    
  const [selectedId, setSelectedId] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={{flex:2, marginHorizontal: 8, marginVertical:8}}>
                <Image source={{ uri: 'asset:/images/fruits.png'}}
                                style={{height: 200,
                                        borderRadius:25}}/>
            </View>
            <View style={{flex:1, marginHorizontal: 8, marginTop:10}}>
                <Text style={{color:'#CE7F1A', fontSize: 28, fontWeight: 'bold'}}>ASD inclusive</Text>
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{color:'#70747A'}}>Many parents report that their children\'s autism symptoms and related medical issues improve when they remove...</Text>
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
      marginVertical:4,
    },
    main: {
      flex: 2,
      marginHorizontal:20,
      marginVertical:0,
    }
  });
export default Exercises;