import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {StyleSheet, SafeAreaView, View, Alert, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Usefull from './src/screens/Usefull';
import DetailsScreen from './src/screens/DetailsScreen';
import Main_window from './src/screens/Main_window';
import SQLite from 'react-native-sqlite-storage';
Icon.loadFont();

const LogoItem = () => {
  return(
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Главная</Text>
      <Icon name="hearto" size={25} color="black"/>
    </View>
  )
}


const App = () => {
  
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const db = SQLite.openDatabase({name:'sqlite.db', createFromLocation:'~www/sqlite.db'}, 
  ()=> handleSuccess(), (error) => handleFail(error));

  const handleFail = (error) => {
    console.log("fail", {error});
    db.transaction(tx =>{
      tx.executeSql('SELECT * FROM Posts', [], (tx, results) => {
        console.log(results.rows.item(0));
      })
    })
  }
  const handleSuccess = () => {
    console.log("success")
  }

  const Details = () => {
    return(
      <View>
        <Text>Details window!!</Text>
      </View>
    )
  }

  const HomeStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main_window}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    )
   
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'skyblue',
          inactiveTintColor: 'gray'
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            if(route.name == 'Упражнения'){
              iconName= 'home'
            }
            else if(route.name == 'Расписание'){
              iconName= "setting"
            }
            else if(route.name == 'Полезное'){
              iconName= "setting"
            }
            return(
              <Icon name={iconName} color={color} size={size} />
            )
          }
        })}
      >
        <Tab.Screen name={'Упражнения'} component={HomeStack}/>
        <Tab.Screen name={'Расписание'} component={Details}/>
        <Tab.Screen name={'Полезное'} component={Usefull}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default App;