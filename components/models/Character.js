import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/colors';
import CardItem from "../UI/Card";
import getCharacters from "../API/requests";
import CharacterCard from "../UI/CharacterCard";
import Loading from '../UI/Loading'
import {Avatar} from 'react-native-paper';


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
        <ScrollView style={styles.container}>
           {load ? <Loading /> : get.map((data)=>{

            const imgPath=data.thumbnail.path + "." + data.thumbnail.extension   

            return (
                <CharacterCard title={data.name} 
                img={imgPath}
                description={data.description}
                comics={data.comics.items.map((item)=>{
                    return(
                        <Text>{item.name + '\n'}</Text>
                    )
                })}
                events={data.events.items.map((item)=>{
                    return(
                        <Text>{item.name + '\n'}</Text>
                    )
                })} 
                stories={data.stories.items.map((item)=>{
                    return(
                        <Text>{item.name + '\n'}</Text>
                    )
                })}
                series={data.series.items.map((item)=>{
                    return(
                        <Text>{item.name + '\n'}</Text>
                    )
                })}
                />
                

            )
           }) }
        </ScrollView>
    )
}

export default Character;

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary100
    },
    txt:{
        fontSize:16,        
    }
})