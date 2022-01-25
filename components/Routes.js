import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuScreen from './MenuScreen';
import CharacterCreate from './CharacterCreate';
import InstructionScreen from './InstructionScreen';
import About from './About';

const Routes = () => {
    return(
        <Router>
            <Scene key='root'>
                <Scene key='menu' component={MenuScreen} title="Menu" initial hideNavBar/>
                <Scene key='character' component={CharacterCreate} title='Character Creation' hideNavBar/>
                <Scene key='instructions' component={InstructionScreen} title="Instructions" hideNavBar/>
                <Scene key='about' component={About} title="About" hideNavBar/>
            </Scene>
        </Router>
    )
}

export default Routes;