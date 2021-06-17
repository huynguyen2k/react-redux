import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        
        return (
            <div className="game-play__player">
                <div className="image">
                    <div className="select-img">
                        <img src={`./assets/images/${this.props.playerSelected}.png`} alt="scissors" />
                    </div>
                    <img className="player-img" src="./assets/images/player.png" alt="player" />
                </div>
                <div className="selection">
                    <div onClick={() => {this.props.makeChoice('scissors')}} className="select-img active">
                        <img src="./assets/images/scissors.png" alt="scissors" />
                    </div>
                    <div onClick={() => {this.props.makeChoice('rock')}} className="select-img">
                        <img src="./assets/images/rock.png" alt="rock" />
                    </div>
                    <div onClick={() => {this.props.makeChoice('paper')}} className="select-img">
                        <img src="./assets/images/paper.png" alt="paper" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerSelected: state.gameReducer.playerSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeChoice: (value) => {
            const action = {
                type: 'MAKE_CHOICE',
                value
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)