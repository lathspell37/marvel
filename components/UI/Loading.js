import { StyleSheet, View, Image } from "react-native";

function Loading(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/duck.gif')} />
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})