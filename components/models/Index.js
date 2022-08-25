import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/colors';
import CardItem from "../UI/Card";
import { useNavigation } from "@react-navigation/native";

function Index(){

    const navigation = useNavigation();

    function onCharPress(){
        navigation.navigate('Character')
    }   
    function onComicPress(){
        navigation.navigate('Comic')
    } 



    return(
        <ScrollView style={styles.container}>
            
            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Characters'}
            onPress={onCharPress} />     
              
            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Comics'}
            onPress={onComicPress} />          

        </ScrollView>        
    )
}

export default Index;

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary100
    }
})