import apiKey from "../../config/apiKey";
import api from "../../config/api";
import { Alert } from "react-native";



async function getCharacters(){
    
    let getChars = []
     await api.get('/v1/public/characters', {
        params:{
            ...apiKey,
            limit:1,             
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

export default getCharacters;