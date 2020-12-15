import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Item } from '../components';
import { Avatar, Image, Button} from 'react-native-elements';
import HomeScreen from "./HomeScreen";
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

const DATA = [
  {
    id: '1',
    title: 'Speaking'
  },
  {
    id: '2',
    title: 'Games'
  },
  {
    id: '3',
    title: 'Exercises'
  },
]

const Main_window = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={{flex:6}}>
            <View style={{flex:2, flexDirection:'row'}}>
              <Text style={{fontSize:36, color:"#65B2F9", fontWeight:'bold'}}>Auti</Text>
              <Text style={{fontSize:36, color:"#F9D14C", fontWeight:'bold'}}>Shine</Text>
            </View>
            <Text style={{fontSize:14, color:"#979797", fontWeight:'normal', flex:1}}>Let your child shine bright</Text>
          </View>
          <Avatar size='large' rounded icon={{name: 'user',color:'#CE7F1A', type: 'font-awesome'}}/>
        </View>
        <View style={styles.main}>
          <View style={{backgroundColor:"#65B2F9", flex:2, flexDirection:'row', borderRadius:25}}>
            <View style={{flex:1, marginLeft:24, paddingTop:24}}>
              <Text style={{color:'#FFFFFF', fontSize: 24}}>Specialized Education</Text>
              <Button title="See more" buttonStyle={{marginRight:60, borderRadius:25, backgroundColor:'#FFFFFF', marginTop:18}}
                                       titleStyle={{color:"#65B2F9"}}/>
            </View>
            <Image  source={{ uri: 'asset:/images/boy_main.png'}}
                             style={{flex:1, width: 100,
                                     padding:16,
                                     marginHorizontal:30,
                                     borderRadius:25}}/>
          </View>
          <View style={{flex:1, flexDirection:'row', marginTop:16}}>
            <TouchableOpacity style={{flex:1, backgroundColor:'#E9E4FF', borderRadius:15}} onPress= {()=> navigation.navigate('Speaking')}>
              <Image source={{ uri: 'asset:/images/speak_main.png'}}
                              style={{width: 60,
                                      height: 60,
                                      marginHorizontal:16}}/>
              <Text style={{color:"#CB6CE6", fontSize:16, fontWeight:'bold', marginHorizontal:16}}>Speaking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, backgroundColor:'#E9E4FF', borderRadius:15, marginHorizontal:16}} onPress= {()=> navigation.navigate('Home')}>
              <Image source={{ uri: 'asset:/images/game_main.png'}}
                              style={{width: 40,
                                      height: 40,
                                      marginHorizontal:32,
                                      marginTop:16}}/>
              <Text style={{color:"#1B91FD", fontSize:16, fontWeight:'bold', marginLeft:28}}>Games</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, backgroundColor:'#E9E4FF', borderRadius:15}} onPress= {()=> navigation.navigate('Physical')}>
              <Image source={{ uri: 'asset:/images/phys_main.png'}}
                              style={{width: 40,
                                      height: 40,
                                      marginHorizontal:32,
                                      marginTop:16}}/>
              <Text style={{color:"#6B8C10", fontSize:16, fontWeight:'bold', marginHorizontal:14}}>Exercises</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:2, marginTop:20}}>
            <View style={{flex:1, flexDirection:'row'}}>
              <Text style={{flex:4, color:'#CE7F1A', fontSize: 28, fontWeight: 'bold'}}>Recommended</Text>
              <Text style={{flex:1, color:'#979797', fontSize: 22, fontWeight: 'bold', marginTop:6}}>More</Text>
            </View>
            <View style={{flex:4, marginTop:16}}>
              <View style={{backgroundColor:'#C9E8D6', borderRadius:20, flex:1, flexDirection:'row'}}>
                <Image source={{ uri: 'asset:/images/learn_write.png'}}
                                  style={{width: 90,
                                          height: 90,
                                          marginHorizontal:14,
                                          marginVertical:14,
                                          borderRadius:25}}/>
                <View style={{flex:1, marginLeft:22, marginTop:16}}>
              <Text style={{color:'#000000', fontSize: 22, fontWeight: 'bold'}}>Learn how to write</Text>
              <Button title="Start course" buttonStyle={{width:150, borderRadius:25, backgroundColor:'#FFFFFF', marginTop:18}}
                                       titleStyle={{color:"#8AB49C"}}/>
                </View>
              </View>
            </View>
          </View>
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
    flexDirection:'row',
    marginHorizontal:28,
    marginVertical:24,
  },
  main: {
    flex: 14,
    marginHorizontal:28,
    marginVertical:24,
  }
});

export default Main_window;