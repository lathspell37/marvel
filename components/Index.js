import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import BackIcon from "./UI/BackIcon";
import auth from "@react-native-firebase/auth";

function Index(){

    function onSignOut(){
        auth().signOut()     
        console.log('sign out done')         
    }

    if(auth().currentUser){
        return(
            <BackIcon onPress={onSignOut} />
        )
    } else{
        return(
            <View>
                <Text>
                    WELCOME
                </Text>
            </View>
        )
    }



}

export default Index;