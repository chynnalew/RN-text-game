import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {goToPage1, goToPage1a, goToPage1b, goToPage2, goToPage3, goToPage4, goToPage5, goToPage6, goToPage7, goToPage8, goToPage9, goToPage10 ,goToPage11, goToPage12,  goToPage13, goToPage14, goToPage15, goToPage16, goToPage17, goToPage18, goToPage19, goToPage20} from './Actions';


export const page1 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You awaken in a dimly lit room with a throbbing pain in the back of your head. Running your fingers through your hair, you discover crusty blood from the source of the throbbing. You sit up and look around the room. The room is barren aside from a door and a boarded up window. How did you get here? And how are you going to escape?
                It would seem the door has been locked from the outside. It would also seem there is a pretty good drop from the window, though you might be able to land in some trash to help break the fall.
            </Text>
            <Button title='Try the Door' style={[styles.text, styles.button]} onPress={goToPage1a}/>
            <Button title='Try the Window' style={[styles.text, styles.button]} onPress={goToPage1b}/>
        </SafeAreaView>
    )
}

export const page1a = () => {
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            The door is locked from the outside. What do you do?
        </Text>
        <Button title='Try to kick the door down' style={[styles.text, styles.button]} onPress={goToPage2}/>
        <Button title='Go Back' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page1b = () => {
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            You look out the window. It's a far drop to the ground below, but you might be able to land in some trash to help break the fall.
        </Text>
        <Button title='Jump out the window' style={[styles.text, styles.button]} onPress={goToPage3}/>
        <Button title='Go Back' style={[styles.text, styles.button]} onPress={goToPage1}/>
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

export const page3 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page4 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page5 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page6 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page7 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page8 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page9 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page10 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page11 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page12 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page13 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page14 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page15 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page16 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page17 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page18 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page19 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>

            </Text>
            <Button title='Go to Page 1' style={[styles.text, styles.button]} onPress={goToPage1}/>
        </SafeAreaView>
    )
}

export const page20 = () => {
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
