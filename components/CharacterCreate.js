import React from 'react';
import {View, Text, Button} from 'react-native';
import {Action} from 'react-native-router-flux';

const CharacterCreate = () => {
    return(
        <View>
            <Text>Instructions page</Text>
            <Button title='Go Back' onPress={goBack}/>
        </View>
    )
}

export default CharacterCreate;