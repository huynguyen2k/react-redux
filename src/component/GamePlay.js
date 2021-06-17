import React, { Component } from 'react'
import GameInfo from './GameInfo'
import Computer from './Computer'
import Player from './Player'

import '../assets/css/style.css'

export default class GamePlay extends Component {

    render() {
        
        return (
            <div className="game-play">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Player />
                        </div>
                        <div className="col-6">
                            <GameInfo />
                        </div>
                        <div className="col-3">
                            <Computer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
