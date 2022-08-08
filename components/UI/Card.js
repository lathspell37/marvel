import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Card,Title} from 'react-native-paper';
import React from 'react';
import Button from '../UI/Button';
import { Colors } from '../../constants/colors';

function CardItem({title, onPress, img}){
    return(
        <Card style={styles.cardContainer} onPress={onPress}>
            <Card.Content style={styles.title}>
            <Title>{title}</Title>
            </Card.Content>
            <Card.Cover 
            source={img}
            style={styles.cover} />          
        </Card>
    )
}

export default CardItem;

const styles = StyleSheet.create({
    title:{
        alignItems:'center',
        justifyContent:'center'
    },
    cover:{
        borderRadius:8,
        borderWidth: 1,
        borderColor: Colors.primary400,
        marginHorizontal:'10%',
        marginBottom:'5%'
    },
    button: {
        alignItems:'center',
        justifyContent:'center'
    },
    cardContainer:{
        alignContent:'center',
        margin:'5%'        
    }
})