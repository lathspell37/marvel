import {StyleSheet, View} from 'react-native';
import Auth from '../components/Auth/Auth';
import { Colors } from '../constants/colors';
import React, {useEffect} from 'react';
import getCharacters from "../components/API/requests";

function LoginScreen(){
    
    return(
        <View style={styles.container}>
            <Auth />
        </View>
        
    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary100,
        flex:1
    }
})