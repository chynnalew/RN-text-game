import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const MenuScreen = () => {
    const goToCharacter = () => {
        Actions.character()
    }
    const goToInstructions = () => {
        Actions.instructions()
    }
    const goToAbout = () => {
        Actions.about()
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>The game title goes here</Text>
                <Text style={styles.description}>A game where you do stuff and things</Text>
                <Button style={styles.buttonStart} title="Start" onPress={goToCharacter}/>
                <Button style={styles.button} title="How to Play" onPress={goToInstructions}/>
                <Button style={styles.button} title="About" onPress= {goToAbout}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default MenuScreen;