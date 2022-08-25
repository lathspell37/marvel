import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import React from 'react';
import BackIcon from './components/UI/BackIcon';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import IndexScreen from './screens/IndexScreen';
import CharacterScreen from './screens/CharacterScreen'
import ComicScreen from './screens/ComicScreen'
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
        headerShown:false      
        }}
         />
         <Stack.Screen
         name="Index"
         component={IndexScreen}
         options={{
          name:"Index",
          headerShown:false,                    
         }}  />
         <Stack.Screen
         name="Signup"
         component={SignUpScreen}
         options={{    
          headerShown:false                          
         }} />
         <Stack.Screen
         name="Character"
         component={CharacterScreen}
         options={{    
          headerShown:false                          
         }} />
         <Stack.Screen
         name="Comic"
         component={ComicScreen}
         options={{    
          headerShown:false                          
         }} />         
      </Stack.Navigator> 
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({

});
