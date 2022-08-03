import {StyleSheet, View} from 'react-native';
import SignupForm from '../components/Auth/SignupForm';
import { Colors } from '../constants/colors';
import React from 'react';

function SignUpScreen(){
    return(
        <View style={styles.container}>
            <SignupForm />
        </View>
        
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary100,
        flex:1
    }
})