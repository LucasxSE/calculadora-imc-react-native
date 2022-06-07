import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Calculadora from './src/pages/Calculadora';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Início'
          }}
        />
        <Stack.Screen 
          name='Calculadora' 
          component={Calculadora} 
        />
        <Stack.Screen 
          name='Sobre' 
          component={Sobre} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
