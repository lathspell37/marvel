import {View, StyleSheet, Pressable, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import Button from "../UI/Button";
import Input from "../UI/Input";
import Images from "../UI/Images";
import Loading from "../UI/Loading";
import { Colors } from "../../constants/colors";

import auth from "@react-native-firebase/auth";

function Auth(){

    const [eMail, setEMail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation();

    const [isEntering, setEntering] = useState(false)

    if(isEntering){
        return (
            <Loading />
        );
     }

    async function onConfirmPress(){
        setEntering(true)
        if(eMail && password){
            await auth()
            .signInWithEmailAndPassword(eMail, password)
            .then(res => {                
                navigation.navigate('Index');                
            })
            .catch(err => {
                setEntering(false)
                if(err.code === 'auth/wrong-password')
                    Alert.alert('Wrong Password', 'Please Try Again')
                else if (err.code === 'auth/too-many-requests')
                    Alert.alert('Too Many Request', 'Please Try Later')
                else if (err.code === 'auth/user-not-found')
                    Alert.alert('Wrong Email','Email Cannot Found')
                console.log(err.code);
            })
        }
    }

    function onSignupText(){
        navigation.navigate('Signup');
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Images />
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.inputContainer}>
                    <Input                     
                    placeholder={"E-Mail"} 
                    onChangeText={setEMail}/>
                    <Input  
                    onChangeText={setPassword} 
                    placeholder={"PASSWORD"}
                    keyboardType={'numeric'}
                    secureTextEntry={true}
                    textContentType="newPassword"
                     />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={onConfirmPress} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Pressable onPress={onSignupText} style={({pressed}) => pressed && styles.pressedText}>
                    <Text style={styles.text}>
                        If you don't have an account, please tap me!
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Auth;

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',        
    },
    container:{       
        flex:1, 
        flexDirection:'column',
        borderRadius:8,
        borderColor: Colors.primary400,
        borderWidth:3,
        margin:'5%',
        backgroundColor:'white'
    },
    buttonContainer:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:'2%',
        marginRight:'3%'
    },
    imgContainer:{
        flex:2
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color: Colors.primary300,        
        
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center', 
        flex:1,
        marginTop:'9%'
    },
    pressedText:{
        opacity:0.75
    },
    outerContainer:{
        flex:1
    }
})