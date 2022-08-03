import { StyleSheet, Pressable, Image, View } from "react-native";
import React from 'react';
function Button({onPress}){
    return(    
        <View styles={styles.container}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
                <Image 
                style={styles.img}
                source={require('../../assets/images/hulk-fist-button-w.png')} />
            </Pressable>
        </View>)
}

export default Button;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        maxHeight:75,
        maxWidth:75,
        resizeMode:'stretch',
        marginRight:'5%',
    },
    pressed:{
        opacity:0.75,
        borderRadius:4
    }
})