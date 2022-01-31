import React from 'react';
import {Dimensions, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import {goToGame, goToInstructions, goToAbout} from './Actions';
import {Shared} from '../styles/index'
const MenuScreen = () => {
    return(
        <SafeAreaView style={{...Shared.titleContainer}}>
            <ImageBackground source={require('../assets/img/warehouse.png')} resizeMode='cover' style={styles.background}> 
                <View style={styles.textWrap}>
                    <Text style={[{...Shared.text}, styles.title]}>The Warehouse</Text>
                    <Text style={[styles.description, {...Shared.text}]}>A text based choose your own adventure</Text>
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableOpacity style={{...Shared.button}} onPress={goToGame}>
                        <Text style={[{...Shared.text}, {...Shared.buttonText}]}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...Shared.button}} onPress={goToInstructions}>
                        <Text style={[{...Shared.text}]}>Instructions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...Shared.button}} onPress={goToAbout}>
                        <Text style={[{...Shared.text}]}>About</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={[{...Shared.textSmall}, styles.footerText]}>Story by: Kevin Reesor | App by: Chynna Lew</Text>
                </View>
            </ImageBackground>
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
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        backgroundColor: '#0009'
    },
    buttonWrap: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom:100
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height, 
        position: 'absolute', top: 0, left: 0,
        alignItems: 'center'

    }
});

export default MenuScreen;