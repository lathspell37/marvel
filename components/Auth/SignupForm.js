import {StyleSheet, View, Text,Image} from 'react-native';
import React from 'react';
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Colors } from '../../constants/colors';

function SignupForm(){
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../assets/images/marvel-logo.png')} />
                <Text style={styles.text}>You can sign up here!</Text>
            </View>
            <View style={styles.inputContainer}>
                    <Input
                    style={styles.inputs}
                    placeholder={"EMAIL"} />
                    <Input
                    style={styles.inputs}
                    placeholder={"PASSWORD"} />
            </View>  
            <View style={styles.buttonContainer}>
                    <Button style={styles.button} />
            </View>         
                
            
        </View>
    )
}

export default SignupForm;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        borderColor: Colors.primary400,
        borderWidth:3,
        margin:'5%',
        marginTop:'5%',
        backgroundColor:'white'
        
    },
    inputContainer:{
        marginBottom:'15%'
    },
    inputs:{
        padding:'3%',        
    },
    buttonContainer:{
        marginVertical:'5%',
        marginHorizontal:'5%'

    },    
    text:{
        fontSize:16,
        fontWeight:'bold',
        color: Colors.primary300,
        fontFamily:'marvelFont'
        
    },
    imgContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'10%'
    },
    img:{
        maxHeight:175,
        maxWidth:280
    },
    button:{
        alignItems:'center',
        justifyContent:'center'
    }
})