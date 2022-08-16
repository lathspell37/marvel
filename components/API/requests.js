import apiKey from "../../config/apiKey";
import api from "../../config/api";
import { Alert } from "react-native";


async function getCharacters(){
    
    let getChars = []
     await api.get('/v1/public/characters', {
        params:{
            ...apiKey,
            limit:30,             
        }
    }).then(response => 
    {
        getChars = response.data.data.results 
        return getChars;
            
    } 
    ).catch(()=>{
        Alert.alert('Error on load')
    })

    return getChars;
    
}

export async function getCharacterByName(name){
    let getCharsByName = []    
    await api.get(`/v1/public/characters?name=${name}`, {
       params:{
           ...apiKey                     
       }
   }).then(response => 
   {
       getCharsByName.push(response.data.data.results) 
       return getCharsByName;
           
   } 
   ).catch(()=>{
       Alert.alert('Error on load')
   })

   return getCharsByName;
}

export default getCharacters;

