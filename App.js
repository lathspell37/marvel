import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import React from 'react';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import IndexScreen from './screens/IndexScreen';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          name:"Login",          
          headerTitle: () => (
            <Image style={{width:"100%", maxHeight:70,backgroundColor:Colors.background}}
            source={require('./assets/images/america-shield.png')}
            resizeMode='center' />
          )          
        }}
         />
         <Stack.Screen
         name="Index"
         component={IndexScreen}
         options={{
          name:"Index",          
         }}  />
         <Stack.Screen
         name="Signup"
         component={SignUpScreen}
         options={{
          name:"Signup",          
          headerTitle: () => (
            <Image style={{width:"100%", maxHeight:70,backgroundColor:Colors.background}}
            source={require('./assets/images/america-shield.png')}
            resizeMode='center' />
          )         
         }} />
      </Stack.Navigator> 
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({

});
