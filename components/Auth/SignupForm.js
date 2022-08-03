import {StyleSheet, View, Text,Image} from 'react-native';
import React from 'react';
import Button from "../UI/Button";
import Input from "../UI/Input";
import Images from "../UI/Images";
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
                    placeholder={"USERNAME"}
                    />
                    <Input
                    style={styles.inputs}
                    placeholder={"EMAIL"} />
                    <Input
                    style={styles.inputs}
                    placeholder={"PASSWORD"} />
                    <Input
                    style={styles.inputs}
                    placeholder={"PLEASE ENTER PASSWORD AGAIN"} /> 
            </View>  
            <View style={styles.buttonContainer}>
                    <Button  />
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
        marginTop:'5%'
    },
    inputs:{
        padding:'3%'
    },
    buttonContainer:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:'2%',
        marginRight:'3%'
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
        marginTop:'3%'
    },
    img:{
        maxHeight:175,
        maxWidth:280
    }
})