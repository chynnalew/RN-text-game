import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const MenuScreen = () => {
    const goToGame= () => {
        Actions.game()
    }
    const goToInstructions = () => {
        Actions.instructions()
    }
    const goToAbout = () => {
        Actions.about()
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textWrap}>
                <Text style={[styles.title, styles.text]}>The game title goes here</Text>
                <Text style={[styles.description, styles.text]}>A game where you do stuff and things</Text>
            </View>
            <View style={styles.buttonWrap}>
                <Button style={[styles.buttonStart, styles.button, styles.text]} title="Start" onPress={goToGame}/>
                <Button style={[styles.button, styles.text]} title="How to Play" onPress={goToInstructions}/>
                <Button style={[styles.button, styles.text]} title="About" onPress= {goToAbout}/>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.text, styles.footerText]}>By me | For you | Copyright something</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color: 'white',
        
    },
    textWrap: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        marginTop: 100,
        marginBottom: 40
    },
    description:{
        fontSize: 20,
        maxWidth: '60%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonWrap: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 100,
        marginBottom:100
    }
});

export default MenuScreen;