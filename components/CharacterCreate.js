import React from 'react';
import {Keyboard, SafeAreaView, StyleSheet, Text, Button, TextInput} from 'react-native';
import {goToPage1, goToMenu} from './Actions';

const CharacterCreate = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            <Text style={[styles.text, styles.title]}>Create Your Character</Text>
            <Text style={[styles.text, styles.inputText]}>Name</Text>
            <TextInput
                style={styles.input}
                maxLength={50}
                onChangeText={props.onChangeName}
                defaultValue={props.playerName}
            />
            <Button style={[styles.text, styles.button]} title='Continue' onPress={goToPage1}/>
            <Button style={[styles.text, styles.button]} title='Go Back' onPress={goToMenu}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#000',
    },
    input:{
        backgroundColor:'#fff',
        margin: 5,
        padding: 5,
        width: '50%'
    },
    inputText:{
        fontSize: 20,
    },
    text:{
        color:'#fff'
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
    }
})

export default CharacterCreate;