import {Text, View, ScrollView, StyleSheet,Image } from 'react-native'
import { getComics } from '../API/requests' 
import React, {useState, useEffect} from 'react'
import Loading from '../UI/Loading'
import {Colors} from '../../constants/colors';
import CharacterCard from '../UI/CharacterCard';

function Comic(){
    const [load,setLoad] = useState(true);
    const [get, setGet] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    useEffect(()=>{
        getComics().then((comics)=>{
           setGet(comics)    
           setLoad(false);
        }) 
   },[])  


    function searchByName(){
        console.log('search icon pressed');
    }

    return(
        <ScrollView style={styles.container}>     
           {load ? <Loading /> : get.map((data)=>{
            
            const imgPath=data.thumbnail.path + "." + data.thumbnail.extension   
            
            return (
                
                <View>                    
                    <CharacterCard title={data.title} 
                    img={imgPath}
                    description={data.description}
                    headerOne={'Description: '}
                    headerTwo={'Creators: '}
                    headerThree={'Characters: '}
                    headerFour={'Stories: '}
                    headerFive={'Events: '}
                    comics={data.creators.items.map((item)=>{
                        return(
                            <Text>{item.name + '\n'}</Text>
                        )
                    })}
                    events={data.characters.items.map((item)=>{
                        return(
                            <Text>{item.name + '\n'}</Text>
                        )
                    })} 
                    stories={data.stories.items.map((item)=>{
                        return(
                            <Text>{item.name + '\n'}</Text>
                        )
                    })}
                    series={data.events.items.map((item)=>{
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

export default Comic;

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
    }})