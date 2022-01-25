import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {goToMenu, goToPage1, goToPage1a, goToPage1b, goToPage2, goToPage2a, goToPage2b, goToPage2c, goToPage3, goToPage4, goToPage4a, goToPage5, goToPage6, goToPage7, goToPage8, goToPage9, goToPage10 ,goToPage11, goToPage12,  goToPage13, goToPage14, goToPage15, goToPage16, goToPage17, goToPage18, goToPage19, goToPage20} from './Actions';


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
            You look out the window. It's so dark that you can only make out a dumpster blow, and an illuminated window in the warehouse across the courtyard. It's a far drop to the ground below, but you might be able to land in the trash to help break your fall. 
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
                You kick the door with all you've got. With a thunderous boom, the door gives way and you fall back on your ass.
            </Text>
            <Button title='Exit the Room' style={[styles.text, styles.button]} onPress={goToPage2a}/>
        </SafeAreaView>
    )
}

export const page2a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                As you walk down the hallway you notice walls are made of a dirty corrugated metal and the passage has no doors. At the end there are two stairways. 
            </Text>
            <Button title='Go to the Right' style={[styles.text, styles.button]} onPress={goToPage2b}/>
            <Button title='Go to the Left' style={[styles.text, styles.button]} onPress={goToPage2c}/>
        </SafeAreaView>
    )
}
export const page2b =() => {
    return(
        <SafeAreaView style = {styles.container}>
            <Text style={styles.text}>
            You stand at the top of a rusty diamond plate staircase. The passage decends steeply down into darkness. You can't see what lies at the end. 
            </Text>
            <Button title='Go Back' style={[styles.text, styles.button]} onPress={goToPage2a}/>
            <Button title='Go Down the Dark Stairwell' style={[styles.text, styles.button]} onPress={goToPage5}/>
        </SafeAreaView>
    )
}
export const page2c =() => {
    return(
        <SafeAreaView style = {styles.container}>
            <Text style={styles.text}>
            You can barely make out a doorway at at the end of the left stairs, faintly illuminated by fluorescent lights. You can hear the murmur of several voices in the distance. 
            </Text>
            <Button title='Go Back' style={[styles.text, styles.button]} onPress={goToPage2a}/>
            <Button title='Go Towards the Voices' style={[styles.text, styles.button]} onPress={goToPage8}/>
        </SafeAreaView>
    )
}

export const page3 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
            You pull the poorly nailed boards from the window, squeeze into a crouching position on the sill, You peer out the window and hesitate for a moment, then jump feet first into the trash. A searing pain shoots up your leg like lightning then resonates through your whole body. You look down, stifling a scream when you see a long bloody rod protruding out the top of your foot.
            </Text>
            <Button title='Try to pull the rod out of your foot' style={[styles.text, styles.button]} onPress={goToPage12}/>
            <Button title='Try to pull yourself out of the dumpster' style={[styles.text, styles.button]} onPress={goToPage4}/>
        </SafeAreaView>
    )
}

export const page4 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Leaving the metal in your foot, you grab the edge of the dumpster and try to pull yourself out. The metal rod twists sideways and you collapse back into the trash. Your body goes nmb with pain and you're pretty sure you hear yourself screaming in the distance. Everything fades to black.
            </Text>
            <Button title='Continue' style={[styles.text, styles.button]} onPress={goToPage4a}/>
        </SafeAreaView>
    )
}

export const page4a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You awake to the sound of a dumpster lid slamming down. Everything is dark, but you can hear and feel the rumble of the truck about to flip the dumpster contents into it's bed. You try to scream out, but no one can hear you and you're compacted to death with the rest of the trash.  
            </Text>
            <Button title='Try Again' style={[styles.text, styles.button]} onPress={goToMenu}/>
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
