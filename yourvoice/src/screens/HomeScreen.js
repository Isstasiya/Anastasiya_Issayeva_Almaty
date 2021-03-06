import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { Item } from '../components';

const DATA = [
  {
    id: '1',
    title: 'Speaking',
    image:''
  },
  {
    id: '2',
    title: 'Games',
    image:''
  },
  {
    id: '3',
    title: 'Exercises',
  },
]

const HomeScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'gray' : 'skyblue';
    return(
      <Item item={item} backgroundColor={backgroundColor} handleOnPress = {()=> navigation.navigate('Details')}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default HomeScreen;