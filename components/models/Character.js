import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/colors';
import CardItem from "../UI/Card";
import getCharacters from "../API/requests";

import Loading from '../UI/Loading'


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
        <ScrollView>
           {load ? <Loading /> : get.map((data)=>{

            const imgPath=data.thumbnail.path + "." + data.thumbnail.extension   

            return (
                <View style={styles.container} >
                  <Text style={styles.txt} >{data.name}</Text>
                    <Text style={styles.txt} >{data.description}</Text>
                    <Image style={styles.img} source={{uri: imgPath}} />
                    <Text style={styles.txt} >{data.comics.items.map((item)=>{
                        return(
                            <Text style={styles.txt} >{item.name}</Text>
                        )
                    })}</Text>
                    <Text style={styles.txt} >{data.stories.items.map((item)=>{
                        return(
                            <Text style={styles.txt} >{item.name}</Text>
                        )
                    })}</Text>
                    <Text style={styles.txt} >{data.events.items.map((item)=>{
                        return(
                            <Text style={styles.txt} >{item.name}</Text>
                        )
                    })}</Text>
                    <Text style={styles.txt} >{data.series.items.map((item)=>{
                        return(
                            <Text style={styles.txt} >{item.name}</Text>
                        )
                    })}</Text>
                </View>
            
            )
           }) }
        </ScrollView>
    )
}

export default Character;

const styles = StyleSheet.create({
    img:{
        width:150,
        height:150,
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        margin:'5%'
    }
})