import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import IndexScreen from './screens/IndexScreen';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontLoading] = useFonts({
    'marvelFont': require('./assets/fonts/Marvel-Regular.ttf')
  });

  if(!fontLoading){
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          name:"Login",
          animation:'fade',
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
          animation:'fade'
         }}  />
         <Stack.Screen
         name="Signup"
         component={SignUpScreen}
         options={{
          name:"Signup",
          animation:'fade'
         }} />
      </Stack.Navigator> 
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({

});
