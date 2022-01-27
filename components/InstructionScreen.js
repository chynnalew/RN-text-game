import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {goToMenu} from './Actions';
import {Shared} from '../styles/index'

const InstructionsScreen = () => {

    return(
        <SafeAreaView style={{...Shared.container}}>
            <Text style={{...Shared.text}}>InstructionsScreen page</Text>
            <Button style={[{...Shared.text}]} title='Go Back' onPress={goToMenu}/>
        </SafeAreaView>
    )
}
export default InstructionsScreen;