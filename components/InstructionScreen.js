import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {goToMenu} from './Actions';

const InstructionsScreen = () => {

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>InstructionsScreen page</Text>
            <Button style={[styles.text, styles.button]} title='Go Back' onPress={goToMenu}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
    },
    text:{
        color:'#fff'
    }
})

export default InstructionsScreen;