import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Card,Title} from 'react-native-paper';
import React from 'react';
import Button from '../UI/Button';
import { Colors } from '../../constants/colors';

function CardItem({title, onPress, img}){
    return(
        <Card style={styles.cardContainer} onPress={onPress}>
            <Card.Content style={styles.titleContainer}>
            <Title style={styles.title}>{title}</Title>
            </Card.Content>
            <Card.Cover 
            source={img}
            style={styles.cover} />          
        </Card>
    )
}

export default CardItem;

const styles = StyleSheet.create({
    titleContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'7%',
  
    },
    title:{
        fontFamily:'Marvel-Regular',
        fontSize:24,
        fontWeight:'bold'         
    },
    cover:{
        borderRadius:8,
        marginHorizontal:'10%',
        marginBottom:'5%',              
    },
    button: {
        alignItems:'center',
        justifyContent:'center'
    },
    cardContainer:{
        alignContent:'center',
        margin:'5%',
        borderRadius:8,
        borderWidth: 2,
        borderColor: Colors.primary400, 
        backgroundColor:'white',
        padding:'5%',        
    }
})