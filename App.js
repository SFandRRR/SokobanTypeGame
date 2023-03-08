import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const levels = [
    [
        [" ", " ", " ", " ", " "],
        [" ", "1", " ", " ", " "],
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
            move_cmd: this.props.move,
            collision_map: this.props.collision
        }
    }

    renderTile(graphic) {
        return (
            <p>{graphic}</p>
        )
    }

    

    move(map, x, y, dir,collision) {
        let tile = map[y][x]
        //tile="test"
        switch (dir) {
            case "N":
                if (y == 0) { break; }
                    map[y - 1][x] = tile
                    map[y][x] = " "
                break;

            case "S":            
                    map[y + 1][x] = tile
                    map[y][x] = " "
                break;

            case "E":               
                    map[y][x + 1] = tile
                    map[y][x] = " "

                break;
            case "W":
                if (x == 0) { break; }
                    map[y][x - 1] = tile
                    map[y][x] = " "
                break;

            default:
                return null;
        }
    }


    render() {

        const { move_cmd } = this.state;
        const { tile_map } = this.state;
        const { collision_map } = this.state;

        for (let i in move_cmd) {
            console.log("issued a move: " + move_cmd[i])
            this.move(tile_map, move_cmd[i][0], move_cmd[i][1], move_cmd[i][2],collision_map)
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
            new_move: true,

            layer_background: null,
            layer_entity: null,

        }
    }

    move_cmd = []

    checkCollision(collision, x, y) {
        if (collision[y][x] == 1) {
            console.log("collision : solid")
            return false
        }
        if (collision[y][x] == "B") {
            console.log("collision : box")
            return false
        }
        return true
    }

    changeXY(x, y) {

        let dir = ""

        if (x == -1) { dir = "W" }
        if (x == 1) { dir = "E" }
        if (y == -1) { dir = "N" }
        if (y == 1) { dir = "S" }

        
        this.move_cmd.pop()
        this.move_cmd.push([this.state.player_position[0], this.state.player_position[1], dir])

        x = this.state.player_position[0] + x
        y = this.state.player_position[1] + y

        if (this.checkCollision(levels[0], x, y)) {
            this.setState({ player_position: [x, y] });
            console.log("Player postion:" + this.state.player_position)
            console.log("Move List:" + this.move_cmd)
        }
      
        this.state.new_move = true
    }

    render() {

        if (this.state.new_level) {

            let starter_pos = levels[1]
            for (let y in starter_pos) {
                for (let x in starter_pos[y]) {
                    if (starter_pos[y][x] == "S") {
                        console.log("Start position found!")
                        this.state.player_position = [parseInt(x), parseInt(y)]
                        break;
                    }
                }
            }
            //[2,1,"N"]

            this.state.layer_background = <TileMap map={levels[0]} />

            this.state.new_level = false

        }

        if (this.state.new_move) {

            this.setState({ layer_entity: <TileMap map={levels[1]} move={this.move_cmd} collision={levels[0]} /> });

            this.state.new_move = false
        }

        //this.move_cmd = []

        return (
            <div>
                <div id="layer0">
                    {this.state.layer_background}
                </div>

                <div id="layer1">
                    {this.state.layer_entity}
                </div>
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