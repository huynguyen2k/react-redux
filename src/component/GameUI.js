import React, { Component } from 'react'
import '../assets/css/style.css'

import {connect} from 'react-redux'

class GameUI extends Component {

    renderPlayArea = () => {
        return (
            <div className="play-area">
                <span onClick={() => {this.props.changeSelection('Small')}} className="select-btn">SMALL</span>
                <div className="random-dices">
                    {this.props.random.map((value, index) => {
                        return <img key={index} src={`./assets/images/${value}.png`} alt="dice" />
                    })}
                </div>
                <span onClick={() => {this.props.changeSelection('Big')}} className="select-btn">BIG</span>
            </div>
        )
    }

    renderResult = () => {
        return (
            <div className="result-area">
                <h3>Selected: {this.props.selected}</h3>
                <h3>Win: {this.props.win}</h3>
                <h3>Total rounds: {this.props.totalRounds}</h3>
            </div>
        )
    }

    render() {
        
        return (
            <div className="game-play">
                <div className="container">
                    <h1 className="game-play__header">SHAKE DICE GAME</h1>
                    <div className="game-play__body">
                        {this.renderPlayArea()}
                        {this.renderResult()}
                        <div className="control-btn">
                            <span onClick={this.props.playGame} className="play-game-btn">Play Game</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state.gameState
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeSelection: (value) => {
            const action = {
                type: 'CHANGE_SELECTION',
                value
            }

            dispatch(action)
        },
        playGame: () => {
            const random = []

            for (let i = 1; i <= 3; i++) {
                let number = Math.floor(Math.random() * 6) + 1
                random.push(number)
            }

            const action = {
                type: 'PLAY_GAME',
                random
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameUI)