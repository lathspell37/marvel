import {Image,Pressable} from 'react-native'
import React from 'react';


function BackIcon({onPress}){
    return(
        <Pressable onPress={onPress}>
            <Image
            style={{width:100,height:100}}
            source={require('../../assets/images/hulk-fist.png')} />
        </Pressable>

    )
}

export default BackIcon;

