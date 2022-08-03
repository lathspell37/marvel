import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
function Images(){
    return(
        <View style={styles.outerContainer}>
            <View style={styles.container} >
                <Image style={styles.imgs} source={require('../../assets/images/captain-america.png')} />
                <Image style={styles.imgs} source={require('../../assets/images/thor.png')} /> 
                <Image style={styles.imgs} source={require('../../assets/images/deadpool.png')} /> 
                <Image style={styles.imgs} source={require('../../assets/images/wolverine.png')} /> 
                <Image style={styles.imgs} source={require('../../assets/images/hulk.png')} /> 
                <Image style={styles.imgs} source={require('../../assets/images/spiderman.png')} /> 
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/images/marvel-logo.png')} />  
            </View>
        </View>

    )
}

export default Images;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    imgs:{
        maxHeight:120,
        maxWidth:45,
        margin:'2%',
        marginTop:'40%'        
    },
    logo:{
        maxHeight:175,
        maxWidth:280
    },
    outerContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    logoContainer:{
        marginTop:'40%',       
    }
})