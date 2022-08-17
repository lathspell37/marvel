import {Text, View, ScrollView, StyleSheet,Image } from 'react-native'
import { getComics } from '../API/requests' 
import React, {useState, useEffect} from 'react'
import {format as prettyFormat} from 'pretty-format';
import Loading from '../UI/Loading'


function Comic(){
    const [load,setLoad] = useState(true);
    const [get, setGet] = useState([]);

    useEffect(()=>{
        getComics().then((comics)=>{
           setGet(comics)    
           setLoad(false);
           console.log(prettyFormat(get));
        }) 
   },[])  

    return(
        <ScrollView>
            {load ? <Loading /> : get.map((data)=>{
                console.log('------------------------------------------------');                 
                return(
                    <ScrollView>
                        <Text style={styles.header}>{data.title + '\n'}</Text>
                        <Text>{'Description: ' + data.description + '\n'}</Text>
                        <Text>{'Pages: ' + data.pageCount  + '\n'}</Text>
                        <Text>{'Creators: ' + data.creators.items.map((item)=>{
                            return(
                                <Text>{item.name}</Text>
                            )
                        }) }</Text>
                        <Text>{'Characters: ' + data.characters.items.map((item)=>{
                            return(
                                <Text>{item.name}</Text>
                            )
                        }) }</Text>
                                     

                    </ScrollView>

                )
            })} 
        </ScrollView>
        
    )
}

export default Comic;

const styles = StyleSheet.create({
    header:{
        fontSize:24,
        fontWeight:'bold'
    },
    img:{
        width:50,
        height:50
    }
})