import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuScreen from './MenuScreen';
import Game from  './Game';
import InstructionScreen from './InstructionScreen';
import About from './About';
import {page1, page1a, page1b, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20} from './Pages';

const Routes = () => {
    return(
        <Router>
            <Scene key='root'>
                <Scene key='menu' component={MenuScreen} title="Menu" initial hideNavBar/>
                <Scene key='game' component={Game} title='Game' hideNavBar/>
                <Scene key='instructions' component={InstructionScreen} title="Instructions" hideNavBar/>
                <Scene key='about' component={About} title="About" hideNavBar/>
                <Scene key='page1' component={page1} title="Page 1"/>
                <Scene key='page1a' component={page1a} title="Page 1.5"/>
                <Scene key='page1b' component={page1b} title="Page 1.5"/>
                <Scene key='page2' component={page2} title="Page 2"/>
                <Scene key='page3' component={page3} title="Page 3"/>
                <Scene key='page3' component={page3} title="Page 4"/>
                <Scene key='page3' component={page3} title="Page 5"/>
                <Scene key='page3' component={page3} title="Page 6"/>
                <Scene key='page3' component={page3} title="Page 7"/>
                <Scene key='page3' component={page3} title="Page 8"/>
                <Scene key='page3' component={page3} title="Page 9"/>
                <Scene key='page3' component={page3} title="Page 10"/>
                <Scene key='page3' component={page3} title="Page 11"/>
                <Scene key='page3' component={page3} title="Page 12"/>
                <Scene key='page3' component={page3} title="Page 13"/>
                <Scene key='page3' component={page3} title="Page 14"/>
                <Scene key='page3' component={page3} title="Page 15"/>
                <Scene key='page3' component={page3} title="Page 16"/>
                <Scene key='page3' component={page3} title="Page 17"/>
                <Scene key='page3' component={page3} title="Page 18"/>
                <Scene key='page3' component={page3} title="Page 19"/>
                <Scene key='page3' component={page3} title="Page 20"/>
            </Scene>
        </Router>
    )
}

export default Routes;