import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {goToMenu, goToPage1, goToPage1a, goToPage1b, goToPage2, goToPage2a, goToPage2b, goToPage2c, goToPage3, goToPage4, goToPage4a, goToPage5, goToPage6, goToPage6a, goToPage6b, goToPage7, goToPage8, goToPage8a, goToPage9, goToPage10 ,goToPage11, goToPage11a, goToPage12,  goToPage13, goToPage14, goToPage14a, goToPage14b, goToPage15, goToPage16, goToPage17, goToPage18, goToPage19, goToPage20} from './Actions';


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
                You find yourself in a hallway. The walls are made of a dirty corrugated metal and the passage has no doors. At the end the hall forks into two stairways. 
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
            You stand at the top of a rusty diamond plate staircase. The passage descends steeply down into darkness. You can't see what lies at the end. 
            </Text>
            <Button title='Go back to the fork in the hallway' style={[styles.text, styles.button]} onPress={goToPage2a}/>
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
            <Button title='Go back to the fork in the hallway' style={[styles.text, styles.button]} onPress={goToPage2a}/>
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
                You head down the dark staircase. The air is getting cooler and you can hear your footsteps echoing around you. You've been walking for so long, you're sure you must be below the ground level. When you finally reach the end of the stairs, you find a hallway with various doors. The first door is made of a heavy metal. A little further down the hallway is a rundown looking wooden door.
            </Text>
            <Button title='Open the Metal Door' style={[styles.text, styles.button]} onPress={goToPage6}/>
            <Button title='Open the Wooden Door' style={[styles.text, styles.button]} onPress={goToPage14}/>
            <Button title='Go Back' style={[styles.text, styles.button]} onPress={goToPage4}/>

        </SafeAreaView>
    )
}

export const page6 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                The door swings open smoothly, revealing a strange blue glow. You enter the room to see a large plant like  bio-luminescent organism growing in the center of the room. There's a work bench with various scientific and botany tools against the back wall.
            </Text>
            <Button title='Leave the Room' style={[styles.text, styles.button]} onPress={goToPage6a}/>
            <Button title='Examine the work bench' style={[styles.text, styles.button]} onPress={goToPage6b}/>
        </SafeAreaView>
    )
}
export const page6a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You stand in a cold hallway. To your right is a metal door. Further down the hallway is a wooden door. There are stairs behind you.
            </Text>
            <Button title='Open the metal door' style={[styles.text, styles.button]} onPress={goToPage6}/>
            <Button title='Open the wooden door' style={[styles.text, styles.button]} onPress={goToPage14}/>
            <Button title='Go Back up the Stairs' style={[styles.text, styles.button]} onPress={goToPage2a}/>
        </SafeAreaView>
    )
}

export const page6b = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You approach the table. It has various metal tools and jars strewn about. A glowing blue mortar and pestle catches your eye. It must have been used to grind up parts of the organism. There's a stack of papers on the opposite end of the table. 
            </Text>
            <Button title='Leave the room' style={[styles.text, styles.button]} onPress={goToPage6a}/>
            <Button title='Look at the papers' style={[styles.text, styles.button]} onPress={goToPage7}/>
        </SafeAreaView>
    )
}

export const page7 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
            While sciencey and indecipherable in many ways, the notes have a strange tone. There are logs of scientific tests on this plant, but they seem to speak of it in a reverential way. They don’t call it a plant - they don’t call it “it” either.... They refer to the glowing blue thing as “Her”. Maybe this scientist is a little too involved in his work, or maybe it’s a joke? You wonder who you’re dealing with. They must be the one’s who injured you and put you in that room. Your thoughts are interrupted by voices approaching from the stairwell.
            </Text>
            <Button title='Hide in the lab' style={[styles.text, styles.button]} onPress={goToPage13}/>
            <Button title='Continue down the hallway' style={[styles.text, styles.button]} onPress={goToPage14}/>
        </SafeAreaView>
    )
}

export const page8 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You peak through the doorway to see a junk filled warehouse. As you creep through the room towards the voices, you smell burning and see a thick trail of smoke winding up, escaping the building through a large hole in the ceiling. You see four men, with their backs turned to you huddled around a fire in the center of the room.
            </Text>
            <Button title='Get a closer look' style={[styles.text, styles.button]} onPress={goToPage8a}/>
            <Button title='Get out of here' style={[styles.text, styles.button]} onPress={goToPage2a}/>
        </SafeAreaView>
    )
}

export const page8a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You slowly and silently move in to get a closer look at the men. You catch a glimpse of one of their faces. Much to your alarm, he, and the rest of the men seem to be.... glowing. A blue light emanates from their exposed skin. Who are these people? Are they even people?
            </Text>
            <Button title='Go back to the stairwell' style={[styles.text, styles.button]} onPress={goToPage2a}/>
            <Button title='Get closer to hear their conversation' style={[styles.text, styles.button]} onPress={goToPage9}/>
        </SafeAreaView>
    )
}

export const page9 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You hide behind a box a few yards away from the men. It's difficult to hear, but you pick up on some sciency terms you don't understand. It's pretty clear they're taking about some kind of experiments. They often mention "her" and "her family"... Are they doing experiments on people? Is that why you were brought here? You can see a door past the men. You could try to get there, but the clutter is dense and the men might notice you.
            </Text>
            <Button title='Try to sneak past the men' style={[styles.text, styles.button]} onPress={goToPage10}/>
            <Button title='Go back to the hallway' style={[styles.text, styles.button]} onPress={goToPage2a}/>
        </SafeAreaView>
    )
}

export const page10 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                As you try to sneak by, you knock over a car door that was precariously perched atop a stack of boxes. You see it slip in slow motion and there’s nothing you can do. The sound is deafening. Within seconds the men from the fire descend upon you. You resist, but it is no use. They are unusually strong. They force something in your mouth and you black out.
            </Text>
            <Button title='Wake up!' style={[styles.text, styles.button]} onPress={goToPage11}/>
        </SafeAreaView>
    )
}

export const page11 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Your vision slowly swims into focus. The room is at an odd angle, and you realize you're strapped to a board tilted upright. You can't move your arms or legs, but you do have a little bit of head movement. You look down and gasp. You're stripped down to your underwear and your skin is glowing blue. The floor in front of you is cracked, snarled blue roots grow out of the cracks, glowing with the same blue luminosity. You hear the door creak open.  
            </Text>
            <Button title='Look at the door' style={[styles.text, styles.button]} onPress={goToPage11a}/>
        </SafeAreaView>
    )
}

export const page11a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Two men enter the room, pushing a metal cart. The blue glow on their skin make your stomach drop. One of the men is wearing a doctor's coat, medical mask, and goggles. The cart is full of medical instruments. As you try to break free of the shackles, one of the men firmly holds your head still as the other grabs a scalpel from the cart. Your body feels hot as the knife cuts deep into your chest. The man picks up the end of the blue floor root, guiding it towards the incision. Then the root jumps to life, forcing itself into your chest. You black out, feeling the life slip from your body.
            </Text>
            <Button title='Try again' style={[styles.text, styles.button]} onPress={goToMenu}/>
        </SafeAreaView>
    )
}

export const page12 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
            With great pain and difficulty, you remove the metal from your foot. You reach up, grabbing the lip of the dumpster. Despite the pain, you are eventually able to make it to the top of the dumpster and fall out. You limp about, only to discover each end of the alley is gated off. There's no way you can climb it with your injury. The only other exit is a door leading back into the building you just jumped from.
            </Text>
            <Button title='Go through the door' style={[styles.text, styles.button]} onPress={goToPage2a}/>
        </SafeAreaView>
    )
}

export const page13 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You look around the room, trying to find a place to hide, but there aren't any good options. You hear voices getting louder til they're right outside the door. You scramble towards a rack of lab coats in the corner of the room, barely squeezing behind it as the door opens. Two men enter, heading straight towards your hiding spot. One of the men grabs the lab coat in front of you. You make awkward eye contact as his puts the coat on. Before either of you can react, the other man grabs you. Everything goes black.
            </Text>
            <Button title='Wake up!' style={[styles.text, styles.button]} onPress={goToPage11}/>
        </SafeAreaView>
    )
}

export const page14 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You open the wooden door, exposing what appears to be living quarters. There are four beds along the left wall, each with their own footlocker at the base. Other than that, the room is empty. You check the contents of the lockers: shoes, clothes, romance novels, nothing out of the ordinary. As you turn to leave the room, you see a huge cavernous hole in the opposite wall, exposing a long glowing tunnel. How did you miss that? The voices in the hallway grow louder. They must be right outside the room.
            </Text>
            <Button title='Go down the tunnel' style={[styles.text, styles.button]} onPress={goToPage14a}/>
            <Button title='Leave the room' style={[styles.text, styles.button]} onPress={goToPage14b}/>
        </SafeAreaView>
    )
}

export const page14a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                The tunnel walls are covered with glowing blue plants. Their roots snaking around the tunnel walls and ceiling. As you make your way down the path, the plants pulsate and sway in the still air around you. You come to a split in the path. Both passages look identical.
            </Text>
            <Button title='Go Left' style={[styles.text, styles.button]} onPress={goToPage15}/>
            <Button title='Go Right' style={[styles.text, styles.button]} onPress={goToPage18}/>
        </SafeAreaView>
    )
}

export const page14b = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Despite the voices clearly indicating people are right outside the door, you confidently swing it open. Two men, pushing a cart, turn to look at you. YOu barely have time to notice their glowing blue skin before they lunge at you, shoving you to the ground. You hit your head on the concrete and everything goes black.
            </Text>
            <Button title='Wake Up!' style={[styles.text, styles.button]} onPress={goToPage11}/>
        </SafeAreaView>
    )
}

export const page15 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You head down the left path. To your surprise, the tunnel opens up into a huge cavern with a 10ft wide stream running through it. As you approach the stream, a foul smell hits you. You think this may be a sewer leak, but the scent is oddly... metallic. When you reach the bank it's clear this isn't water. The liquid is a deep red color. The sides of the stream where the liquid has dried are covered in a sticky, tar-like, black goo. Your current path continues on the other side of the stream. The stream has carved a tunnel through the cavern wall.
            </Text>
            <Button title='Cross to continue down the path' style={[styles.text, styles.button]} onPress={goToPage16}/>
            <Button title='Follow the stream' style={[styles.text, styles.button]} onPress={goToPage17}/>
        </SafeAreaView>
    )
}

export const page16 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                The stream is knee deep. You wade through with relative ease. What looked like solid ground is actually a thick layer of the black goo. It feels like it's getting thicker as you struggle to get back on the path. Before you know it, you've sunk down to your waist and the goo seems to be swirling and boiling around you.  It pulls you under, completely covering your face and cutting off your air supply. You lose your sense of direction as you wildly fight back to the surface. Your lungs burn and you slip out of consciousness as several hands grab your shoulders and pull you out of the goo. 
            </Text>
            <Button title='Go to Page 11' style={[styles.text, styles.button]} onPress={goToPage11}/>
        </SafeAreaView>
    )
}

export const page17 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                You avert your path and follow the stream. The air around the liquid is uncomfortably warm. You notice there aren't any of the blue plants in this tunnel. the darkness is unsettling, but you can see a glowing light in the distance. As you get closer, you can see the light is coming from a large cavern. You exit the tunnel, finding yourself in a huge open cave containing a  snarled, sharp, glowing, blue root ball. The smallest roots must be a few feet in diameter. Whatever plant these roots belong to must be gigantic. You stare at the pulsing mass in awe. How could something be so... beautiful. 
            </Text>
            <Button title='Approach her' style={[styles.text, styles.button]} onPress={goToPage17a}/>
        </SafeAreaView>
    )
}

export const page17a = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> 
                You were so captivated by her glow that it took you a minute to notice several dozen people kneeling below her, all emanating the same blue light from their skin. You feel the urge to join them.
                As you look back up at her you're overwhelmed with emotions. You can't look away - no - you won't look away. As you approach her, you are brought to your knees. The black goo cements you to the cavern floor.
            </Text>
            <Button title='...' style={[styles.text, styles.button]} onPress={goToPage17b}/>
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
