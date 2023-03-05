import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const levels = [
    [
        ["a", "a", "b", "a", "c"],
        ["b", "a", "a", "b", "c"],
        ["a", "b", "a", "a", "c"],
        ["a", "b", "a", "a", "c"],
        ["a", "a", "b", "a", "c"]
    ],
    [
        ["s", "sss", "sss", "sss", "s"],
        ["s", "s", "s", "s", "s"],
        ["s", "s", "s", "s", "s"]
    ]
]

class TileMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tile_map: this.props.map
        }
    }

    renderTile(graphic) {
        return (
            <p>{graphic}</p>
        )
    }

    render() {

        const { tile_map } = this.state;
        let content = [];

        for (let i in tile_map) {
            let tile_map_row = [];

            for (let z in tile_map[i]) {
                tile_map_row.push(<th id="tile">{this.renderTile(tile_map[i][z])}</th>);
            }
            content.push(<tr>{tile_map_row}</tr>)
        }

        return (
            <div>
                <table id="tile_table">
                    {content}
                </table>
            </div>

        )
    }
}

function MoveButton(props) {
    return (
        <button className="movebutton" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CorX: 0,
            CorY: 0
        }
    }

    renderMoveButton(i,dir) {
        return (
            <MoveButton
                value={dir}
                onClick={() => i=+1}
            />
        );
    }
    
    changeCor(x, y) {
        x=this.state.CorX+x
        y=this.state.CorY+y     
        this.setState({ CorX: x, CorY: y });
        console.log("Player postion:" + [this.state.CorX, this.state.CorY])
    }

    render() {
        return (
            <div>
                <table id="tile_table">
                    <tr>
                        <th id="tile"></th>
                        <th id="tile"><MoveButton onClick={() => this.changeCor(0,1)} value="/\"></MoveButton></th>
                        <th id="tile"></th>
                    </tr>
                    <tr>
                        <th id="tile"><MoveButton onClick={() => this.changeCor(-1, 0)} value="<"></MoveButton></th>
                        <th id="tile"></th>
                        <th id="tile"><MoveButton onClick={() => this.changeCor(1, 0)} value=">"></MoveButton></th>
                    </tr>
                    <tr>
                        <th id="tile"></th>
                        <th id="tile"><MoveButton onClick={() => this.changeCor(0, -1)} value="\/"></MoveButton></th>
                        <th id="tile"></th>
                    </tr>
                </table>         
                {this.state.CorX},{this.state.CorY}
            </div>
        )
    }
}

class Game extends React.Component {

    render() {
        return (
            <div>
                <div id="layer0">
                    <TileMap map={levels[0]} />
                </div>
                <div id="layer1">
                    <TileMap  map={levels[1]} />
                </div>
                <div id="keypad">
                    <Player ></Player>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div id="maingame"><Game /></div>
);

export default Game;
