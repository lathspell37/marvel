import {StyleSheet,View} from 'react-native';
import auth from "@react-native-firebase/auth";
import React from 'react';
import Index from '../components/Index';

function IndexScreen(){
    return(
        <View>
            <Index />
        </View>        
    )
}

export default IndexScreen;

const styles = StyleSheet.create({
    
})