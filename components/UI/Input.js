import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import React from 'react';
function Input({placeholder, keyboardType, onChangeText, pass}){
    return (
        
            <TextInput 
            style={styles.inputContainer} 
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            textAlign='center'
            secureTextEntry={pass}
            placeholderTextColor={Colors.primary300}
            />
       
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
        borderRadius:10,
        height:73,
        minWidth:300,
        borderColor: Colors.primary100,
        borderWidth:2,
        padding:'8%',
        marginTop:'3%',        
        color:Colors.primary500,        
    },    

})