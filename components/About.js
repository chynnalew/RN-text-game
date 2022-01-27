import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Shared} from '../styles/index';
import {Actions} from 'react-native-router-flux';

const About = () => {
    const goBack = () => {
        Actions.menu()
    }

    return(
        <SafeAreaView style={{...Shared.container}}>
            <Text style={{...Shared.text}}>About page</Text>
            <Button style={[{...Shared.text}, {...Shared.button}]} title='Go Back' onPress={goBack}/>
        </SafeAreaView>
    )
}
export default About;