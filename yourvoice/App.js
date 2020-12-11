import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {StyleSheet, SafeAreaView, View, Alert, Text, Button, FlatList, TouchableOpacity } from 'react-native';
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

  const Main = ({navigation}) => {
    return(
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Main window!!</Text>
      </TouchableOpacity>
    )
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
        <Stack.Screen name={"Main"} component={Main}/>
        <Stack.Screen name={"Details"} component={Details}/>
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
            if(route.name == 'Главная!'){
              iconName= ''
            }
            else if(route.name == 'Детали!'){
              iconName= ''
            }
            return(
              <Icon name={"setting"} color={color} size={size} />
            )
          }
        })}
      >
        <Tab.Screen name={'Главная!'} component={HomeStack}/>
        <Tab.Screen name={'Детали!'} component={Details}/>
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