import {View, StyleSheet, Pressable, Text } from "react-native";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Images from "../UI/Images";

import { Colors } from "../../constants/colors";


function Auth(){

    function onConfirmPress(){
        console.log("pressed")
    }

    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Images />
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.inputContainer}>
                    <Input                     
                    placeholder={"USERNAME"} />
                    <Input                    
                    placeholder={"PASSWORD"}
                    keyboardType={'numeric'}
                    secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={onConfirmPress} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Pressable style={({pressed}) => pressed && styles.pressedText}>
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
        fontFamily:'marvelFont'
        
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