import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuScreen from './MenuScreen';
import CharacterCreate from './CharacterCreate';
import Instructions from './Instructions';
import About from './About';

const Routes = () => {
    <Router>
        <Scene key='root'>
            <Scene key='menu' component={MenuScreen} title="Menu" initial />
            <Scene key='character' component={CharacterCreate} title='Character Creation' />
        </Scene>
    </Router>
}

export default Routes;