import React from 'react';
import {Animated, Button, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Shared} from '../styles/index';
import {goToMenu, goToPage1, goToPage1a, goToPage1b, goToPage2, goToPage2a, goToPage2b, goToPage2c, goToPage3, goToPage4, goToPage4a, goToPage5, goToPage6, goToPage6a, goToPage6b, goToPage7, goToPage8, goToPage8a, goToPage9, goToPage10 ,goToPage11, goToPage11a, goToPage12,  goToPage13, goToPage14, goToPage14a, goToPage14b, goToPage15, goToPage16, goToPage17, goToPage17a, goToPage17b, goToPage18, goToPage18a, goToPage18b, goToPage19, goToPage19a, goToPage20} from './Actions';

export const page1 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You awaken in a dimly lit room with a throbbing pain in the back of your head. Running your fingers through your hair, you discover crusty blood from the source of the throbbing. You sit up and look around the room. The room is barren aside from a door and a boarded up window. How did you get here? And how are you going to escape?
                It would seem the door has been locked from the outside. It would also seem there is a pretty good drop from the window, though you might be able to land in some trash to help break the fall.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage1a}>
                <Text style={[{...Shared.text}]}>Try the Door</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage1b}>
                <Text style={[{...Shared.text}]}>Try the Window</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page1a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                The door is locked from the outside. What do you do?
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2}>
                <Text style={[{...Shared.text}]}>Try to kick the door down</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage1}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page1b = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You look out the window. It's so dark that you can only make out a dumpster blow, and an illuminated window in the warehouse across the courtyard. It's a far drop to the ground below, but you might be able to land in the trash to help break your fall. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage3}>
                <Text style={[{...Shared.text}]}>Jump Out the Window</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage1}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page2 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You kick the door with all you've got. With a thunderous boom, the door gives way and you fall back on your ass.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Exit the Room</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page2a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You find yourself in a hallway. The walls are made of a dirty corrugated metal and the passage has no doors. At the end the hall forks into two stairways. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2b}>
                <Text style={[{...Shared.text}]}>Go to the Right</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2c}>
                <Text style={[{...Shared.text}]}>Go to the Left</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page2b =() => {
    return(
        <View style = {{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You stand at the top of a rusty diamond plate staircase. The passage descends steeply down into darkness. You can't see what lies at the end. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage1}>
                <Text style={[{...Shared.text}]}>Go back to the fork in the Hallway</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage5}>
                <Text style={[{...Shared.text}]}>Go Down the Dark Stairwell</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page2c =() => {
    return(
        <View style = {{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You can barely make out a doorway at at the end of the left stairs, faintly illuminated by fluorescent lights. You can hear the murmur of several voices in the distance. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Go back to the fork in the Hallway</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage8}>
                <Text style={[{...Shared.text}]}>Go towards the voices</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page3 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You pull the poorly nailed boards from the window, squeeze into a crouching position on the sill, You peer out the window and hesitate for a moment, then jump feet first into the trash. A searing pain shoots up your leg like lightning then resonates through your whole body. You look down, stifling a scream when you see a long bloody rod protruding out the top of your foot.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage12}>
                <Text style={[{...Shared.text}]}>Try to pull the rod out of your foot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage4}>
                <Text style={[{...Shared.text}]}>Try to pull yourself out of the dumpster</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page4 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                Leaving the metal in your foot, you grab the edge of the dumpster and try to pull yourself out. The metal rod twists sideways and you collapse back into the trash. Your body goes nmb with pain and you're pretty sure you hear yourself screaming in the distance. Everything fades to black.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage4a}>
                <Text style={[{...Shared.text}]}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page4a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You awake to the sound of a dumpster lid slamming down. Everything is dark, but you can hear and feel the rumble of the truck about to flip the dumpster contents into it's bed. You try to scream out, but no one can hear you and you're compacted to death with the rest of the trash.  
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>Try again</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page5 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You head down the dark staircase. The air is getting cooler and you can hear your footsteps echoing around you. You've been walking for so long, you're sure you must be below the ground level. When you finally reach the end of the stairs, you find a hallway with various doors. The first door is made of a heavy metal. A little further down the hallway is a rundown looking wooden door.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage6}>
                <Text style={[{...Shared.text}]}>Open the Metal Door</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage14}>
                <Text style={[{...Shared.text}]}>Open the Wooden Door</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage4}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page6 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                The door swings open smoothly, revealing a strange blue glow. You enter the room to see a large plant like  bio-luminescent organism growing in the center of the room. There's a work bench with various scientific and botany tools against the back wall.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage6a}>
                <Text style={[{...Shared.text}]}>Leave the Room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage6b}>
                <Text style={[{...Shared.text}]}>Examine the Workbench</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page6a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You stand in a cold hallway. To your right is a metal door. Further down the hallway is a wooden door. There are stairs behind you.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage6}>
                <Text style={[{...Shared.text}]}>Open the Metal Door</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage14}>
                <Text style={[{...Shared.text}]}>Open the Wooden Door</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Go Back up the Stairs</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page6b = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You approach the table. It has various metal tools and jars strewn about. A glowing blue mortar and pestle catches your eye. It must have been used to grind up parts of the organism. There's a stack of papers on the opposite end of the table. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage6a}>
                <Text style={[{...Shared.text}]}>Leave the Room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage7}>
                <Text style={[{...Shared.text}]}>Examine the Papers</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page7 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            While sciencey and indecipherable in many ways, the notes have a strange tone. There are logs of scientific tests on this plant, but they seem to speak of it in a reverential way. They don’t call it a plant - they don’t call it “it” either.... They refer to the glowing blue thing as “Her”. Maybe this scientist is a little too involved in his work, or maybe it’s a joke? You wonder who you’re dealing with. They must be the one’s who injured you and put you in that room. Your thoughts are interrupted by voices approaching from the stairwell.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage13}>
                <Text style={[{...Shared.text}]}>Hide in the Lab</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage14}>
                <Text style={[{...Shared.text}]}>Continue down the hallway</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page8 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You peak through the doorway to see a junk filled warehouse. As you creep through the room towards the voices, you smell burning and see a thick trail of smoke winding up, escaping the building through a large hole in the ceiling. You see four men, with their backs turned to you huddled around a fire in the center of the room.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage8a}>
                <Text style={[{...Shared.text}]}>Get a closer look</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Get out of there</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page8a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You slowly and silently move in to get a closer look at the men. You catch a glimpse of one of their faces. Much to your alarm, he, and the rest of the men seem to be.... glowing. A blue light emanates from their exposed skin. Who are these people? Are they even people?
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Go back to the stairwell</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage9}>
                <Text style={[{...Shared.text}]}>Get closer to hear their conversation</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page9 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You hide behind a box a few yards away from the men. It's difficult to hear, but you pick up on some sciency terms you don't understand. It's pretty clear they're taking about some kind of experiments. They often mention "her" and "her family"... Are they doing experiments on people? Is that why you were brought here? You can see a door past the men. You could try to get there, but the clutter is dense and the men might notice you.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage10}>
                <Text style={[{...Shared.text}]}>Try to sneak past the men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Go back to the hallway</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page10 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                As you try to sneak by, you knock over a car door that was precariously perched atop a stack of boxes. You see it slip in slow motion and there’s nothing you can do. The sound is deafening. Within seconds the men from the fire descend upon you. You resist, but it is no use. They are unusually strong. They force something in your mouth and you black out.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage11}>
                <Text style={[{...Shared.text}]}>Wake up!</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page11 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                Your vision slowly swims into focus. The room is at an odd angle, and you realize you're strapped to a board tilted upright. You can't move your arms or legs, but you do have a little bit of head movement. You look down and gasp. You're stripped down to your underwear and your skin is glowing blue. The floor in front of you is cracked, snarled blue roots grow out of the cracks, glowing with the same blue luminosity. You hear the door creak open.  
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage11a}>
                <Text style={[{...Shared.text}]}>Look at the door</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page11a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                Two men enter the room, pushing a metal cart. The blue glow on their skin make your stomach drop. One of the men is wearing a doctor's coat, medical mask, and goggles. The cart is full of medical instruments. As you try to break free of the shackles, one of the men firmly holds your head still as the other grabs a scalpel from the cart. Your body feels hot as the knife cuts deep into your chest. The man picks up the end of the blue floor root, guiding it towards the incision. Then the root jumps to life, forcing itself into your chest. You black out, feeling the life slip from your body.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>Try again</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page12 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            With great pain and difficulty, you remove the metal from your foot. You reach up, grabbing the lip of the dumpster. Despite the pain, you are eventually able to make it to the top of the dumpster and fall out. You limp about, only to discover each end of the alley is gated off. There's no way you can climb it with your injury. The only other exit is a door leading back into the building you just jumped from.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage2a}>
                <Text style={[{...Shared.text}]}>Go through the door</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page13 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You look around the room, trying to find a place to hide, but there aren't any good options. You hear voices getting louder til they're right outside the door. You scramble towards a rack of lab coats in the corner of the room, barely squeezing behind it as the door opens. Two men enter, heading straight towards your hiding spot. One of the men grabs the lab coat in front of you. You make awkward eye contact as his puts the coat on. Before either of you can react, the other man grabs you. Everything goes black.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage11}>
                <Text style={[{...Shared.text}]}>Wake up!</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page14 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You open the wooden door, exposing what appears to be living quarters. There are four beds along the left wall, each with their own footlocker at the base. Other than that, the room is empty. You check the contents of the lockers: shoes, clothes, romance novels, nothing out of the ordinary. As you turn to leave the room, you see a huge cavernous hole in the opposite wall, exposing a long glowing tunnel. How did you miss that? The voices in the hallway grow louder. They must be right outside the room.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage14a}>
                <Text style={[{...Shared.text}]}>Go down the tunnel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage14b}>
                <Text style={[{...Shared.text}]}>Leave the room</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page14a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                The tunnel walls are covered with glowing blue plants. Their roots snaking around the tunnel walls and ceiling. As you make your way down the path, the plants pulsate and sway in the still air around you. You come to a split in the path. Both passages look identical.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage15}>
                <Text style={[{...Shared.text}]}>Go Left</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage18}>
                <Text style={[{...Shared.text}]}>Go Right</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page14b = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                Despite the voices clearly indicating people are right outside the door, you confidently swing it open. Two men, pushing a cart, turn to look at you. YOu barely have time to notice their glowing blue skin before they lunge at you, shoving you to the ground. You hit your head on the concrete and everything goes black.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage11}>
                <Text style={[{...Shared.text}]}>Wake up!</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page15 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You head down the left path. To your surprise, the tunnel opens up into a huge cavern with a 10ft wide stream running through it. As you approach the stream, a foul smell hits you. You think this may be a sewer leak, but the scent is oddly... meaty. When you reach the bank it's clear this isn't water. The liquid is a deep red color. The sides of the stream where the liquid has dried are covered in a sticky, tar-like, black goo. Your current path continues on the other side of the stream. The stream has carved a tunnel through the cavern wall.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage16}>
                <Text style={[{...Shared.text}]}>Cross to continue down the path</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage17}>
                <Text style={[{...Shared.text}]}>Follow the stream</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page16 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                The stream is knee deep. You wade through with relative ease. What looked like solid ground is actually a thick layer of the black goo. It feels like it's getting thicker as you struggle to get back on the path. Before you know it, you've sunk down to your waist and the goo seems to be swirling and boiling around you.  It pulls you under, completely covering your face and cutting off your air supply. You lose your sense of direction as you wildly fight back to the surface. Your lungs burn and you slip out of consciousness as several hands grab your shoulders and pull you out of the goo. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage11}>
                <Text style={[{...Shared.text}]}>Wake up!</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page17 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You avert your path and follow the stream. The air around the liquid is uncomfortably warm. You notice there aren't any of the blue plants in this tunnel. the darkness is unsettling, but you can see a glowing light in the distance. As you get closer, you can see the light is coming from a large cavern. You exit the tunnel, finding yourself in a huge open cave containing a  snarled, sharp, glowing, blue root ball. The smallest roots must be a few feet in diameter. Whatever plant these roots belong to must be gigantic. You stare at the pulsing mass in awe.  
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage17a}>
                <Text style={[{...Shared.text}]}>Approach her</Text>
            </TouchableOpacity>
        </View>
    )
}

export const page17a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}> 
                You were so captivated by her glow that it took you a minute to notice several dozen people kneeling below her, all emanating the same blue light from their skin. You feel the inescapable urge to join them.
                As you look back up at her you're overwhelmed with emotions. You can't look away. As you approach her, you an invisible force brings you to your knees. The black goo creeps up around you, cementing you to the cavern floor.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage17b}>
                <Text style={[{...Shared.text}]}>...</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page17b = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                Last page follow
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>The End</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page18 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You head down the right path, the tunnel narrowing as you go. You get to a point where the tunnel is so small you are on all fours trying to get through. As the tunnel narrowed the glowing blue that has lit the way has been dimming. Now, as you combat crawl on further, it is totally black. After a while in the dark, you feel the cave floor moisten. Along with the moisture comes a disgusting, sweet, meaty smell. The moisture dries on you, forming an uncomfortable sticky goo.
            Eventually, the tunnel begins to light up again. You notice that the goo is the blackest thing you have ever seen. The moisture you encountered in the tunnel is a deep blood red.
            The tunnel opens up to a sharp drop. Beyond the drop is a huge open cave containing a  snarled, sharp, glowing, blue root ball. The smallest roots must be a few feet in diameter. Whatever plant these roots belong to must be gigantic. There are cracks in the cavern walls above you, that you might be able to squeeze through.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage18a}>
                <Text style={[{...Shared.text}]}>Look Around</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage18b}>
                <Text style={[{...Shared.text}]}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page18a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You stand at the edge of the drop off. Beyond the drop is a huge open cave containing a  snarled, sharp, glowing, blue root ball. The smallest roots must be a few feet in diameter. Whatever plant these roots belong to must be gigantic. You notice signs of a recent rockslide. Giant cracks snake up the cavern walls and natural debris slope down, creating a path from the drop off to the cavern below.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage19}>
                <Text style={[{...Shared.text}]}>Climb Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage20}>
                <Text style={[{...Shared.text}]}>Go down into the cavern</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page18b = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
            You make your way back down the tunnel with ease, finding yourself at a familiar crossroads.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage15}>
                <Text style={[{...Shared.text}]}>Go Left</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage18}>
                <Text style={[{...Shared.text}]}>Go Right</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page19 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                As you climb up the wall, you can see a small opening above you. The rocks shift under your weight, but you persevere on up, climbing into a cramped tunnel. Ahead you see a light, but not the kind you’ve been seeing a lot of. No, this is golden sunlight. The warmth hits your skin and an intense feeling of relief washes over you. Looking around, you see a small grouping of dilapidated warehouses in the distance, surrounded by empty tundra. 
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage19a}>
                <Text style={[{...Shared.text}]}>Get out of here</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page19a = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                Which way is home? How did you get here? Where were you taken? 
                But no matter. Heading of in any direction is fine so long as it’s away from that warehouse.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToMenu}>
                <Text style={[{...Shared.text}]}>The End</Text>
            </TouchableOpacity>
        </View>
    )
}
export const page20 = () => {
    return(
        <View style={{...Shared.container}}>
            <Text style={[{...Shared.text}, {...Shared.textContainer}]}>
                You head down the rock slide into the cavern. As you venture closer to the roots, you feel overwhelmed with a feeling of awe. You feel pulled towards th her pulsing blue light.
            </Text>
            <TouchableOpacity style={{...Shared.button}} onPress={goToPage17a}>
                <Text style={[{...Shared.text}]}>Go to her</Text>
            </TouchableOpacity>
            <Button title='Go to her' style={[{...Shared.text}, {...Shared.button}]} onPress={goToPage17a}/>
        </View>
    )
}
