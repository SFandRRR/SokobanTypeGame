import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const levels = [
    [
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "]
    ],
    [
        [" ", " ", " ", " ", " "],
        [" ", " ", "B", " ", " "],
        [" ", " ", "B", " ", " "],
        [" ", " ", "S", " ", " "],
        [" ", " ", " ", " ", " "]
    ]
]

class TileMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tile_map: this.props.map,
            move_cmd: this.props.move_cmd
        }
    }

    renderTile(graphic) {
        return (
            <p>{graphic}</p>
        )
    }

    move(map, x, y, dir) {
        let tile = map[y][x]

        switch (dir) {
            case "N":
                map[y - 1][x] = tile
                map[y][x] = " "
            default:
                return null;
        }
    }


    render() {

        const { tile_map } = this.state;
        const { move_cmd } = this.state;

        for (let i in move_cmd) {
            console.log("issued a move: " + move_cmd[i])
            this.move(tile_map, move_cmd[i][0], move_cmd[i][1], move_cmd[i][2])
        }

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
class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player_position: [0, 0],
            new_level: true,

            layer_background: null,
            layer_entity: null,
        }
    }

    changeXY(x, y) {
        x = this.state.player_position[0] + x
        y = this.state.player_position[1] + y
        this.setState({ player_position : [x,y] });
        console.log("Player postion:" + this.state.player_position)
    }

    render() {

        if (this.state.new_level) { 

            let starter_pos = levels[1]
            for (let y in starter_pos) {         
                for (let x in starter_pos[y]) {             
                    if (starter_pos[y][x] == "S") {
                        console.log("Start position found!")
                        this.state.player_position = [parseInt(x) , parseInt(y)]
                        break;
                    }
                }
            }
            //[2,1,"N"]
            let move_cmd=[]

            this.state.layer_background = <TileMap map={levels[0]} />
            this.state.layer_entity = <TileMap map={levels[1]} move_cmd={move_cmd} />

            this.state.new_level = false
        }

        return (
            <div>
                <div id="layer0">
                    {this.state.layer_background}
                </div>

                <div id="layer1">
                    {this.state.layer_entity}
                </div>
                <button>boing</button>
                <div id="keypad">
                        <table id="tile_table">
                            <tr>
                                <th id="tile"></th>
                            <th id="tile"><MoveButton onClick={() => this.changeXY(0, -1)} value="/\"></MoveButton></th>
                                <th id="tile"></th>
                            </tr>
                            <tr>
                            <th id="tile"><MoveButton onClick={() => this.changeXY(-1, 0)} value="<"></MoveButton></th>
                                <th id="tile"></th>
                            <th id="tile"><MoveButton onClick={() => this.changeXY(1, 0)} value=">"></MoveButton></th>
                            </tr>
                            <tr>
                                <th id="tile"></th>
                            <th id="tile"><MoveButton onClick={() => this.changeXY(0, 1)} value="\/"></MoveButton></th>
                                <th id="tile"></th>
                            </tr>
                    </table>
                    {this.state.player_position}
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
