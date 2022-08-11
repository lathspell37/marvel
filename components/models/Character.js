import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/colors';
import CardItem from "../UI/Card";
import getCharacters from "../API/requests";
import {format as prettyFormat} from 'pretty-format';

function Character(){
    const [get, setGet] = useState([])


    async function getHeroes(){
        return await getCharacters();
    }
    

    useEffect(()=>{
         getHeroes().then((heroes)=>{
            setGet(heroes)    
                  
         }) 
    },[])
    
    console.log(prettyFormat(get));
    

    return (
        <View>
            <Text>
                character list
            </Text>
        </View>
    )
}

export default Character;

const styles = StyleSheet.create({

})