import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {goToGame, goToInstructions, goToAbout} from './Actions';
import {Shared} from '../styles/index'

const MenuScreen = () => {
    return(
        <SafeAreaView style={{...Shared.titleContainer}}>
            <View style={styles.textWrap}>
                <Text style={[{...Shared.text}, styles.title]}>The Warehouse</Text>
                <Text style={[styles.description, {...Shared.text}]}>A text based choose your own adventure</Text>
            </View>
            <View style={styles.buttonWrap}>
                <Button style={[styles.buttonStart, styles.button, styles.text]} title="Start" onPress={goToGame}/>
                <Button style={[{...Shared.text}, styles.button]} title="How to Play" onPress={goToInstructions}/>
                <Button style={[{...Shared.text}, styles.button]} title="About" onPress= {goToAbout}/>
            </View>
            <View style={styles.footer}>
                <Text style={[{...Shared.textSmall}, styles.footerText]}>Story by: Kevin Reesor | App by: Chynna Lew</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textWrap: {
        flex: 1,
    },
    title: {
        fontSize: 50,
        marginTop: 100,
        marginBottom: 40,
        fontFamily: 'dirtyEgo'
    },
    description:{
        fontSize: 20,
        maxWidth: '60%',
        alignSelf: 'center',
        textAlign: 'center',
    },
    buttonWrap: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 100,
        marginBottom:100
    }
});

export default MenuScreen;