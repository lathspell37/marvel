import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/colors';
import getCharacters from "../API/requests";
import { getCharacterByName } from "../API/requests";
import CharacterCard from "../UI/CharacterCard";
import Loading from '../UI/Loading'
import { Searchbar } from 'react-native-paper';


function Character(){
    const [get, setGet] = useState([]);
    const [getName, setGetName] = useState([]);
    const [load,setLoad] = useState(true);

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    
    async function getHeroes(){
        return await getCharacters();
    }
   

    useEffect(()=>{
         getHeroes().then((heroes)=>{
            setGet(heroes)    
            setLoad(false);
         }) 
    },[])    

    function searchByName(){
        getCharacterByName(searchQuery).then((heroesByNames)=>{                      
            heroesByNames[0] ? setGet(heroesByNames[0]) : null                
            setLoad(false)
         }).catch((err)=>{
            console.log(err);
         })
 
    }
    return (
        <ScrollView style={styles.container}>
           {!load ? <Searchbar 
           style={styles.search}
           placeholder="Search"
           onIconPress={searchByName}
           onChangeText={onChangeSearch}
           icon={require('../../assets/images/search.png')}
           iconColor={Colors.primary100}           
           clearIcon={require('../../assets/images/delete.png')}   /> : null} 
           {load ? <Loading /> : get.map((data)=>{
            
            const imgPath=data.thumbnail.path + "." + data.thumbnail.extension   
            
            return (
                
                <View>                    
                    <CharacterCard title={data.name} 
                    img={imgPath}
                    description={data.description}
                    headerOne={'Description: '}
                    headerTwo={'Comics: '}
                    headerThree={'Events: '}
                    headerFour={'Series: '}
                    headerFive={'Stories: '}
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
                </View>


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
    },
    search:{
        borderRadius:15,
        borderWidth:2,
        borderColor:Colors.primary400,
        marginTop:'3%',
        marginHorizontal:'5%'
    }
})