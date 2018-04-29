import React, { Component } from 'react';

import './Board.css';

class Board extends Component {
    state = {
        moves: [],
        activeButton: null
    }
    render() {
        return (
            <div className="Board">
                <div className="Button-container">
                    <div className="Button Red"></div>
                    <div className="Button Green"></div>
                    <div className="Button Blue"></div>
                    <div className="Button Yellow"></div>
                </div>
                <button onClick={this.handleStartClick}>Play</button>
            </div>
        );
    }
}

export default Board;