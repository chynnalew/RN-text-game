import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, Button} from 'react-native';
import {goToMenu} from './Actions';
import {Shared} from '../styles/index'

const InstructionsScreen = () => {

    return(
        <SafeAreaView style={{...Shared.container}}>
            <Text style={{...Shared.text}}>InstructionsScreen page</Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default InstructionsScreen;