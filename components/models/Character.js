import { StyleSheet, View, Text, ScrollView, FlatList, ActivityIndicator } from "react-native";
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/colors';
import CardItem from "../UI/Card";
import getCharacters from "../API/requests";
import {format as prettyFormat} from 'pretty-format';

function Character(){
    const [get, setGet] = useState([]);
    const [load,setLoad] = useState(true);


    async function getHeroes(){
        return await getCharacters();
    }
    

    useEffect(()=>{
         getHeroes().then((heroes)=>{
            setGet(heroes)    
            setLoad(false);
         }) 
    },[])
   
    return (
        <View>
           {load ? <ActivityIndicator/> : get.map((data)=>{
            return (
            <Text>{data.name + " - " + data.comics.items[0].name}</Text>
            )
           }) }
        </View>
    )
}

export default Character;

const styles = StyleSheet.create({

})