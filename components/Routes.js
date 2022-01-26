import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MenuScreen from './MenuScreen';
import Game from  './Game';
import InstructionScreen from './InstructionScreen';
import About from './About';
import {page1, page1a, page1b, page2, page2a, page2b, page2c, page3, page4, page4a, page5, page6, page6a, page6b, page7, page8, page8a, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20} from './Pages';

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
                <Scene key='page2a' component={page2a} title="Page 2a"/>
                <Scene key='page2b' component={page2b} title="Page 2b"/>
                <Scene key='page2c' component={page2c} title="Page 2c"/>
                <Scene key='page3' component={page3} title="Page 3"/>
                <Scene key='page4' component={page4} title="Page 4"/>
                <Scene key='page4a' component={page4a} title="Page 4a"/>
                <Scene key='page5' component={page5} title="Page 5"/>
                <Scene key='page6' component={page6} title="Page 6"/>
                <Scene key='page6a' component={page6a} title="Page 6"/>
                <Scene key='page6b' component={page6b} title="Page 6"/>
                <Scene key='page7' component={page7} title="Page 7"/>
                <Scene key='page8' component={page8} title="Page 8"/>
                <Scene key='page8a' component={page8a} title="Page 8a"/>
                <Scene key='page9' component={page9} title="Page 9"/>
                <Scene key='page10' component={page10} title="Page 10"/>
                <Scene key='page11' component={page11} title="Page 11"/>
                <Scene key='page12' component={page12} title="Page 12"/>
                <Scene key='page13' component={page13} title="Page 13"/>
                <Scene key='page14' component={page14} title="Page 14"/>
                <Scene key='page15' component={page15} title="Page 15"/>
                <Scene key='page16' component={page16} title="Page 16"/>
                <Scene key='page17' component={page17} title="Page 17"/>
                <Scene key='page18' component={page18} title="Page 18"/>
                <Scene key='page19' component={page19} title="Page 19"/>
                <Scene key='page20' component={page20} title="Page 20"/>
            </Scene>
        </Router>
    )
}

export default Routes;