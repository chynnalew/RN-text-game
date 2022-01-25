import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuScreen from './MenuScreen';
import Game from  './Game';
import InstructionScreen from './InstructionScreen';
import About from './About';
import {page1, page2} from './Pages';

const Routes = () => {
    return(
        <Router>
            <Scene key='root'>
                <Scene key='menu' component={MenuScreen} title="Menu" initial hideNavBar/>
                <Scene key='game' component={Game} title='Game' hideNavBar/>
                <Scene key='instructions' component={InstructionScreen} title="Instructions" hideNavBar/>
                <Scene key='about' component={About} title="About" hideNavBar/>
                <Scene key='page1' component={page1} title="Page 1"/>
                <Scene key='page2' component={page2} title="Page 2"/>
            </Scene>
        </Router>
    )
}

export default Routes;