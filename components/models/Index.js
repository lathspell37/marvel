import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import React, {useEffect, useState} from 'react';
import BackIcon from "../UI/BackIcon";
import auth from "@react-native-firebase/auth";
import {Colors} from '../../constants/colors';
import CardItem from "../UI/Card";
import { useNavigation } from "@react-navigation/native";

function Index(){

    const navigation = useNavigation();

    function onCharPress(){
        navigation.navigate('Character')
    }   
    function onEventPress(){
        navigation.navigate('Event')
    } 
    function onComicPress(){
        navigation.navigate('Comic')
    } 
    function onCreatorPress(){
        navigation.navigate('Creator')
    } 
    function onSeriesPress(){
        navigation.navigate('Series')
    } 
    function onStoriesPress(){
        navigation.navigate('Stories')
    } 



    return(
        <ScrollView style={styles.container}>
            
            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Characters'}
            onPress={onCharPress} />
       
            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Events'}
            onPress={onEventPress} />            

            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Comics'}
            onPress={onComicPress} />

            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Creators'}
            onPress={onCreatorPress} />

            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Series'}
            onPress={onSeriesPress} />

            <CardItem 
            img={require('../../assets/images/buttonBground.jpg')}
            title={'Stories'}
            onPress={onStoriesPress} />

        </ScrollView>        
    )
}

export default Index;

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary100
    }
})