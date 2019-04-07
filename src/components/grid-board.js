import React, { Component } from 'react'
import GridSquare from './grid-square'

class GridBoard extends Component {

    makeGrid() {
        const grid = []
        for (let row = 0; row < 18; row++) {
            grid.push([])
            for (let col = 0; col < 10; col++) {
                grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
            }
        }
        return grid
    }

    render() {
        return (
            <div className='grid-board'>
                {this.makeGrid()}
            </div>
        )
    }
}

export default GridBoard
