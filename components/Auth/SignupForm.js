import {StyleSheet, View, Text,Image, Alert} from 'react-native';
import React, { useState } from 'react';
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Colors } from '../../constants/colors';
import auth from "@react-native-firebase/auth";
import { useNavigation } from '@react-navigation/native';
import Loading from '../UI/Loading';

function SignupForm(){
    const [eMail, setEMail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation();

    const [isAdding, setIsAdding] = useState(false);

    if(isAdding){
        return (
            <Loading />
        );
     }

    async function onLoginHandler(){
        setIsAdding(true)
        if(eMail && password){
            await auth()
            .createUserWithEmailAndPassword(eMail,password)
            .then(res => {
                //goBack() bi önceki sayfaya g+ö++nde+rir, geldiği sayfaya
                navigation.goBack();
                Alert.alert('Done!','Registration Is Completed')
            }).catch(err => {
                setIsAdding(false);
                if(err.code === 'auth/weak-password')
                    Alert.alert('Weak Password', 'Please Enter Minimum 6 Digits')
                else if(err.code === 'auth/invalid-email')
                    Alert.alert('Invalid Email','Please Enter Valid Email')
            })
        }
        
        //const user = auth().currentUser // giriş yapılan kullanıcı bilgileirni getirir.
        
        //auth().signOut() // çıkış yapmanı sağlar, 

    }
  
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../assets/images/marvel-logo.png')} />
                <Text style={styles.text}>You can sign up here!</Text>
            </View>
            <View style={styles.inputContainer}>
                    <Input
                    style={styles.inputs}
                    placeholder={"EMAIL"}
                    onChangeText={setEMail} />
                    <Input
                    style={styles.inputs}
                    placeholder={"PASSWORD"}
                    onChangeText={setPassword} />
            </View>  
            <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                    onPress={onLoginHandler} />
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