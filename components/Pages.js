import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {goToPage1, goToPage2} from './Actions';


export const page1 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 2' style={[styles.text, styles.button]} onPress={goToPage2}/>
        </SafeAreaView>
    )
}

export const page2 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
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
