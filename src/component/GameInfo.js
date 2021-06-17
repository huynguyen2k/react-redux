import React, { Component } from 'react'

import {connect} from 'react-redux'

class GameInfo extends Component {
    render() {
        
        return (
            <div className="game-play__info">
                <h1 className="introduce">Hey I'm Iron man who is the strongest person in the universe.</h1>
                <p className="info-row">{this.props.result}</p>
                <p className="info-row">Win: <span>{this.props.win}</span></p>
                <p className="info-row">Total Rounds: <span>{this.props.totalRounds}</span></p>
                <div className="btn-wrap">
                    <span onClick={this.props.playGame} className="play-game-btn">Play game</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        win: state.gameReducer.win,
        totalRounds: state.gameReducer.totalRounds,
        result: state.gameReducer.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0

            let interval = setInterval(() => {

                dispatch({
                    type: 'RANDOM_CHOICE'
                })
                count++

                if (count === 15) {
                    clearInterval(interval)
                    dispatch({type:'PLAY_GAME'})
                }
                
            }, 100)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo)