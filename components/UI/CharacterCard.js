import {View,ScrollView, StyleSheet, Modal, Pressable,} from 'react-native'
import React,{useState}  from 'react'
import {Card,Paragraph,Title, Button} from 'react-native-paper';
import { Colors } from '../../constants/colors';


function CharacterCard({title, events, comics, img, series, stories, description}){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }} >
                <ScrollView>
                    <Card style={styles.cardContainer} 
                    onPress={() => setModalVisible(!modalVisible)} >
                        <Card.Title style={styles.title} title={title} />
                        <Card.Cover style={styles.cover} source={{ uri: img }} />
                        <Card.Content>
                            <Paragraph style={styles.headerTxt} >Description: </Paragraph>
                            <Paragraph>{description}</Paragraph>
                            <Paragraph style={styles.headerTxt} >Comics: </Paragraph>
                            <Paragraph>{comics}</Paragraph>
                            <Paragraph style={styles.headerTxt} >Events: </Paragraph>
                            <Paragraph>{events}</Paragraph>
                            <Paragraph style={styles.headerTxt} >Series: </Paragraph>
                            <Paragraph>{series}</Paragraph>
                            <Paragraph style={styles.headerTxt} >Stories: </Paragraph>
                            <Paragraph>{stories}'</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={()=>setModalVisible(!modalVisible)}>Back</Button>
                        </Card.Actions>
                    </Card>
                </ScrollView>
                
            </Modal>
            <Card style={styles.cardContainer} 
                onPress={() => setModalVisible(true)} >
                    <Card.Title style={styles.title} title={title} />
                    <Card.Cover style={styles.cover} source={{ uri: img }} />
            </Card>
        </View>


    )
}

export default CharacterCard;

const styles = StyleSheet.create({
    title:{
            fontFamily:'Marvel-Regular',
            fontSize:24,
            fontWeight:'bold',
            color:Colors.primary300
    },
    headerTxt:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Marvel-Regular',
        color:Colors.primary300,
        marginTop:'8%'
    },
    cardContainer:{
        margin:'5%',
        borderRadius:8,
        borderWidth: 2,
        borderColor: Colors.primary400, 
        backgroundColor:'white',
        padding:'5%', 
    },
    cover:{
        borderRadius:50,
        borderWidth:1,
        maxWidth:500,
        maxHeight:500,       
    }
})