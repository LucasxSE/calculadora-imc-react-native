import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Calculadora from './src/pages/Calculadora';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator shifting={true} barStyle={{ backgroundColor: '#00ab94' }} >
      <Tab.Screen 
      name='Home' 
      component={HomeScreen} 
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name='home' size={24} color='white' />
        ),
      }}
      />
      <Tab.Screen 
      name='Calculadora' 
      component={Calculadora}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name='calculator' size={24} color='white' />
        ),
      }} 
      />
      <Tab.Screen 
      name='Sobre' 
      component={Sobre}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name='help' size={24} color='white' />
        ),
      }} 
      />
    </Tab.Navigator>
  );
  
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
