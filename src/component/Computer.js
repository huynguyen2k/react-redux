import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        const randomAnimation = `
            @keyframes randomAnimation${Date.now()} {
                from {
                    top: 0;
                }
                to {
                    top: 100%;
                }
            }
        `
        const style = {
            animation: `randomAnimation${Date.now()} 0.1s ease`
        }

        return (
            <div className="game-play__player">
                <style>{randomAnimation}</style>
                <div className="image">
                    <div className="select-img">
                        <img style={style} src={`./assets/images/${this.props.computerSelected}.png`} alt="scissors" />
                    </div>
                    <img className="player-img" src="./assets/images/computer.png" alt="computer" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computerSelected: state.gameReducer.computerSelected
    }
}

export default connect(mapStateToProps)(Computer)