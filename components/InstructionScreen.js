import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const InstructionsScreen = () => {
    const goBack = () => {
        Actions.menu()
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>InstructionsScreen page</Text>
            <Button style={[styles.text, styles.button]} title='Go Back' onPress={goBack}/>
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