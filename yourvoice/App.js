import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import 'react-native-gesture-handler';
import {StyleSheet, SafeAreaView, View, Alert, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Usefull from './src/screens/Usefull';
import Shedule from './src/screens/Shedule';
import Main_window from './src/screens/Main_window';
import Physical_main from './src/screens/Physical_main';
import Speaking_main from './src/screens/Speaking_main';
import Article from './src/screens/Article';
import HomeScreen from './src/screens/HomeScreen';
import { Item } from './src/components';
Icon.loadFont();
Icon1.loadFont();
Icon2.loadFont();

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator()

  const Details = () => {
    return(
      <View>
        <Text>Details window!!</Text>
      </View>
    )
  }

  const HomeStack = () => {
    return(
      <Stack.Navigator navigationOptions={{headerBackground: '#E0AC6A'}}>
        <Stack.Screen name="Main" component={Main_window} options={{headerTintColor:'#CE7F1A',
                                                                     headerTitleStyle:{fontWeight:'bold',
                                                                                        fontSize:24},
                                                                                        headerStyle:{backgroundColor: '#FFF8EF'}}}/>
        <Stack.Screen name="Physical" component={Physical_main} options={{headerTintColor:'#CE7F1A',
                                                                     headerTitleStyle:{fontWeight:'bold',
                                                                                        fontSize:24},
                                                                                        headerStyle:{backgroundColor: '#FFF8EF'}}}/>
        <Stack.Screen name="Speaking" component={Speaking_main} options={{headerTintColor:'#CE7F1A',
                                                                     headerTitleStyle:{fontWeight:'bold',
                                                                                        fontSize:24},
                                                                                        headerStyle:{backgroundColor: '#FFF8EF'}}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTintColor:'#CE7F1A',
                                                                     headerTitleStyle:{fontWeight:'bold',
                                                                                        fontSize:24},
                                                                                        headerStyle:{backgroundColor: '#FFF8EF'}}}/>
      </Stack.Navigator>
    )
  };

  const DiscoverStack = () =>{
    return(
      <Stack.Navigator>
      <Stack.Screen name="Discover" component={Usefull} options={{headerTintColor:'#CE7F1A',
                                                                     headerTitleStyle:{fontWeight:'bold',
                                                                                        fontSize:24},
                                                                                        headerStyle:{backgroundColor: '#FFF8EF'}}}/>
      <Stack.Screen name="Article" component={Article} options={{headerTintColor:'#CE7F1A',
                                                                     headerTitleStyle:{fontWeight:'bold',
                                                                                        fontSize:24},
                                                                                        headerStyle:{backgroundColor: '#FFF8EF'}}}/>
      </Stack.Navigator>
    )
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#DDDDDD',
          activeBackgroundColor:'#E0AC6A',
          inactiveBackgroundColor:'#E0AC6A',
          showLabel:false
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            if(route.name == 'Упражнения'){
              iconName= 'home'
            }
            else if(route.name == 'Расписание'){
              iconName= "calendar"
            }
            else if(route.name == 'Полезное'){
              iconName= "magnifying-glass";
              return(
                <Icon1 name={iconName} color={color} size={size} />
              )
            }
            else if(route.name == 'Аккаунт'){
              iconName= "user";
              return(
                <Icon name={iconName} color={color} size={size} />
              )
            }
            return(
              <Icon name={iconName} color={color} size={size} />
            )
          }
        })}
      >
        <Tab.Screen name={'Упражнения'} component={HomeStack}/>
        <Tab.Screen name={'Расписание'} component={Shedule}/>
        <Tab.Screen name={'Полезное'} component={DiscoverStack}/>
        <Tab.Screen name={'Аккаунт'} component={Shedule}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;