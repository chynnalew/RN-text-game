import React from 'react';
import CharacterCreate from './CharacterCreate';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerName: 'test name',
            health: 100,
            day: 1,
            items: [],
        }
    }

    handleChangeName = (text) => {
        this.setState({
            playerName: text
        })
    }
    render() {
        return(
            <CharacterCreate 
                playerName={this.state.playerName}
                onChangeName = {this.handleChangeName}/>
        )
    }
}

export default Game