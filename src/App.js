import React, { Component } from 'react';
import './App.css';
import GridSquare from './components/grid-square'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tetris Redux</h1>
                </header>
                <GridSquare color="3" />
            </div>
        );
    }
}

export default App;
