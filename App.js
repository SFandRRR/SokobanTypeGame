import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import spr_player_s from './graphics/PlayerS.gif'
import spr_player_n from './graphics/PlayerN.gif'
import spr_player_w from './graphics/PlayerW.gif'
import spr_player_e from './graphics/PlayerE.gif'

import spr_empty from './graphics/empty.png'

import spr_ground from './graphics/ground.png'
import spr_ground_a from './graphics/ground_a.png'
import spr_ground_b from './graphics/ground_b.png'
import spr_ground_c from './graphics/ground_c.png'

import spr_border_left from './graphics/border_left.png'
import spr_border_right from './graphics/border_right.png'
import spr_border_cavity_vertical from './graphics/border_cavity_vertical.png'
import spr_border_cavity_vertical_top from './graphics/border_cavity_top.png'
import spr_border_cavity_vertical_bottom from './graphics/border_cavity_bottom.png'

import spr_border_top from './graphics/border_top.png'
import spr_border_bottom from './graphics/border_bottom.png'
import spr_border_bottom_left from './graphics/border_bottom_left.png'
import spr_border_bottom_right from './graphics/border_bottom_right.png'
import spr_border_bottom_middle from './graphics/border_bottom_middle.png'

import spr_border_corner_left from './graphics/border_corner_left.png'
import spr_border_corner_right from './graphics/border_corner_right.png'
import spr_border_corner_left_bottom from './graphics/border_corner_left_bottom.png'
import spr_border_corner_right_bottom from './graphics/border_corner_right_bottom.png'

import spr_border_cavity_horizontal from './graphics/border_cavity_horizontal.png'
import spr_border_cavity_horizontal_left from './graphics/border_cavity_left.png'
import spr_border_cavity_horizontal_right from './graphics/border_cavity_right.png'

import spr_box_a from './graphics/box_a.png'
import spr_box_b from './graphics/box_b.png'
import spr_box_c from './graphics/box_c.png'
import spr_ladder from './graphics/ladder.png'

import spr_arrow_up from './graphics/arrow_up.png'
import spr_arrow_left from './graphics/arrow_left.png'
import spr_arrow_right from './graphics/arrow_right.png'
import spr_arrow_down from './graphics/arrow_down.png'

import background_mountains_dusk from './graphics/background_mountains_dusk.png'


const levels = [
    [
        ["1", "3", "3", "3", "3", "3", "3", "3", "1"],
        ["2", "0", "0", "0", "0", "0", "0", "0", "2"],
        ["2", "0", "2", "0", "3", "3", "3", "0", "2"],
        ["2", "0", "2", "0", "0", "0", "0", "0", "2"],
        ["2", "0", "2", "0", "0", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "3", "3", "3", "0", "2"],
        ["2", "0", "0", "0", "0", "0", "0", "0", "2"],
        ["1", "3", "4", "0", "0", "0", "4", "3", "1"],
        ["1", "1", "2", "0", "0", "0", "2", "3", "1"],
        ["1", "1", "2", "0", "0", "0", "2", "0", "2"],
        ["1", "1", "1", "3", "3", "3", "1", "3", "1"],
    ],
    [
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "B", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "B", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "S", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    ]
]


function tileImage(graphic, id="") {

    return (<img className="tile_img" id={id} src={graphic }/>)
}

function tileInterpreter(tilemap) {

    let new_tilemap = tilemap
    let maxY = tilemap.length

        for (let y in tilemap) {
            for (let x in tilemap[y]) {
                let tile = tilemap[y][x]

                if (tile == 4) {


                    if (tilemap[y][x - 1] == 3 && tilemap[y][(parseInt(x) + 1)] == 0) {
                        if (tilemap[(parseInt(y) + 1)][x] == 0) {
                            new_tilemap[y][x] = tileImage(spr_border_corner_right_bottom, "solid")
                        } else {
                            new_tilemap[y][x] = tileImage(spr_border_corner_right, "solid")
                        }

                    }
                    if (tilemap[y][x - 1] == 0 && tilemap[y][(parseInt(x) + 1)] == 3) {
                        if (tilemap[(parseInt(y) + 1)][x] == 0) {
                            new_tilemap[y][x] = tileImage(spr_border_corner_left_bottom, "solid")
                        } else {
                            new_tilemap[y][x] = tileImage(spr_border_corner_left, "solid")
                        }
                    }
                }
            }
        }

        for (let y in tilemap) {
            for (let x in tilemap[y]) {
                let tile = tilemap[y][x]

                if (tile == 2) {
                    if (tilemap[y][(parseInt(x) + 1)] == 0 && tilemap[y][(parseInt(x) - 1)] == 0) {

                        if (tilemap[(parseInt(y) + 1)][x] == 0) {
                            new_tilemap[y][x] = tileImage(spr_border_cavity_vertical_bottom, "solid")
                        } else
                            if (tilemap[y - 1][x] == 0) {
                                new_tilemap[y][x] = tileImage(spr_border_cavity_vertical_top, "solid")
                            } else {
                                new_tilemap[y][x] = tileImage(spr_border_cavity_vertical, "solid")
                            }
                    } else {
                        if (tilemap[y][(parseInt(x) + 1)] == 0) {
                            new_tilemap[y][x] = tileImage(spr_border_left, "solid")
                        }
                        if (tilemap[y][x - 1] == 0) {
                            new_tilemap[y][x] = tileImage(spr_border_right, "solid")
                        }
                    }
                    if (tilemap[y][x] == 2) {
                        new_tilemap[y][x] = tileImage(spr_border_left, "solid")
                    }

                }
            }
        }

        for (let y in tilemap) {
            for (let x in tilemap[y]) {
                let tile = tilemap[y][x]

                if (tile == 3) {
                    if (y != 0 && y != (maxY - 1)) {
                        if (tilemap[(parseInt(y) + 1)][x] == 0 && tilemap[y - 1][x] == 0) {

                            if (tilemap[y][(parseInt(x) + 1)] == 0) {
                                new_tilemap[y][x] = tileImage(spr_border_cavity_horizontal_right, "solid")
                            } else
                                if (tilemap[y][x - 1] == 0) {
                                    new_tilemap[y][x] = tileImage(spr_border_cavity_horizontal_left, "solid")
                                } else {
                                    new_tilemap[y][x] = tileImage(spr_border_cavity_horizontal, "solid")
                                }
                        }

                    }
                    if (y == 0) {
                        new_tilemap[y][x] = tileImage(spr_border_top, "solid")
                    }

                    if (y == (maxY - 1)) {
                        if (tilemap[y][x - 1] == 1 && tilemap[y][(parseInt(x) + 1)] == 1) {
                            new_tilemap[y][x] = tileImage(spr_border_bottom_middle, "solid")
                        } else

                            if (tilemap[y][x - 1] == 1) {
                                new_tilemap[y][x] = tileImage(spr_border_bottom_left, "solid")

                            } else
                                if (tilemap[y][(parseInt(x) + 1)] == 1) {
                                    new_tilemap[y][x] = tileImage(spr_border_bottom_right, "solid")
                                } else {
                                    new_tilemap[y][x] = tileImage(spr_border_bottom, "solid")
                                }
                    } else if (y!=0 && tilemap[y - 1][x] == 0) {
                        if (!(tilemap[y - 1][x] == 0)) { new_tilemap[y][x] = tileImage(spr_border_bottom, "solid") } else {
                            if (tilemap[y][x] == 3) {
                                if (tilemap[y][x - 1] == 1) {
                                    new_tilemap[y][x] = tileImage(spr_border_bottom_left, "solid")
                                }
                                if (tilemap[y][(parseInt(x) + 1)] == 1) {
                                    new_tilemap[y][x] = tileImage(spr_border_bottom_right, "solid")
                                }
                            }
                        }

                    } else if (tilemap[(parseInt(y) + 1)][x] == 0) {
                        new_tilemap[y][x] = tileImage(spr_border_top, "solid")
                    }
                }

            }
        }

        for (let y in tilemap) {
            for (let x in tilemap[y]) {
                if (tilemap[y][x] == "1") {
                    new_tilemap[y][x] = tileImage(spr_empty, "solid")
                }
                if (tilemap[y][x] == "0") {
                    new_tilemap[y][x] = tileImage(spr_ground)
                    const rand = Math.floor(1 + Math.random() * (30 - 1));
                    //console.log(rand)
                    if (rand == 13) { new_tilemap[y][x] = tileImage(spr_ground_a) }
                    if (rand == 12) { new_tilemap[y][x] = tileImage(spr_ground_b) }
                    if (rand == 11) { new_tilemap[y][x] = tileImage(spr_ground_c) }

                }
            }
        }


        for (let y in tilemap) {
            for (let x in tilemap[y]) {//
                if (tilemap[y][x] == " ") {
                    new_tilemap[y][x] = tileImage(spr_empty)
                }
                if (tilemap[y][x] == "B") {

                    const rand = Math.floor(1 + Math.random() * (3 - 1));
                    //console.log(rand)
                    if (rand == 1) { new_tilemap[y][x] = tileImage(spr_box_a, "box") }
                    if (rand == 2) { new_tilemap[y][x] = tileImage(spr_box_b, "box") }
                    if (rand == 3) { new_tilemap[y][x] = tileImage(spr_box_c, "box") }
                }
                if (tilemap[y][x] == "S") {
                    new_tilemap[y][x] = tileImage(spr_player_s, "player")
                }
            }
        }
    tilemap = new_tilemap
    console.log("processed tile map")
    return new_tilemap;
}

class TileMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile_map: this.props.map,
            move_cmd: this.props.move,
            plr_xy: this.props.xy,
        }
    }
    
    move(map, x, y, dir) {
        let tile = map[y][x]
        let specialid =tile.props.id
        switch (dir) {
            case "N":
                if (y == 0) { break; }
                    if (specialid == "player") { tile = tileImage(spr_player_n , "player") }
                    map[y - 1][x] = tile
                    map[y][x] = " "
                break;

            case "S":            
                    if (specialid == "player") { tile = tileImage(spr_player_s, "player") }
                    map[y + 1][x] = tile
                    map[y][x] = " "
                break;

            case "E":    
                if (specialid == "player") { tile = tileImage(spr_player_e, "player") }
                    map[y][x + 1] = tile
                    map[y][x] = " "

                break;
            case "W":
                if (x == 0) { break; }
                if (specialid == "player") { tile = tileImage(spr_player_w, "player") }
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

        for (let i in move_cmd) {
            console.log("issued a move: " + move_cmd[i])
            this.move(tile_map, move_cmd[i][0], move_cmd[i][1], move_cmd[i][2])
        }
        
        let content = [];
       
        tileInterpreter(tile_map)

        for (let y in tile_map) {
            for (let x in tile_map[y]) {
                if (tile_map[y][x] == "S") {
                    this.lastX = x
                    this.lastY = y                   
                }
            }
        }
        
        for (let y in tile_map) {
            let tile_map_row = [];

            for (let x in tile_map[y]) {

                tile_map_row.push(<th >{tile_map[y][x]}</th>);
            }
            content.push(<tr>{tile_map_row}</tr>)
        }

        return (
            <div>
                <table id="tile_table" border="0" cellPadding="0" cellSpacing="0">
                        {content}
                </table>
            </div>

        )
    }
}

class GameBackground extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height
        }
    }

    render() {

        let gameBackgroundStyle = {
            "position": "fixed",
            "top": "0px",
            "left": "0px",

            "overflow-clip-margin": "0px",
            "overflow": "hidden",

            "z-index": " -1",

            "width": this.props.width,
            "height": this.props.height,

        }

        let content =  < img className="backgroundImage" src = { background_mountains_dusk } />

        return (
            <div id="gamebackground" style={gameBackgroundStyle } >
                {content}
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
    move_plr_cmd = []
    move_box_cmd = []
    checkCollision(collision, x, y, dir) {

        console.log(levels[0][y][x].props.id)

        if (levels[0][y][x].props.id =="solid") {
            console.log("collision : solid")
            return false
        }
        if (levels[1][y][x].props.id=="box") {
            console.log("collision : box, checking")

            switch (dir) { 
                case "N":
                    y=y-1
                    break;

                case "S":
                    y = y+1
                    break;

                case "E":
                    x=x+1
                    break;

                case "W":
                    x = x - 1
                    break;

                default:
                    break;
            }

            if (levels[0][y][x].props.id=="solid") {
                console.log("collision : unmovable")
                return false
            }
            if (levels[1][y][x].props.id=="box") {
                console.log("collision : second box")
                return false
            }

            switch (dir) {
                case "N":
                    y = y + 1
                    break;

                case "S":
                    y = y - 1
                    break;

                case "E":
                    x = x - 1
                    break;

                case "W":
                    x = x + 1
                    break;

                default:
                    break;
            }

            
            this.move_box_cmd.push([x, y, dir])
        }
        return true
    }

    changeXY(x, y) {

        let dir = ""

        if (x == -1) { dir = "W" }
        if (x == 1) { dir = "E" }
        if (y == -1) { dir = "N" }
        if (y == 1) { dir = "S" }

        
        this.move_plr_cmd.pop()
        this.move_plr_cmd.pop()
        this.move_plr_cmd.pop()
        this.move_plr_cmd.pop()

        this.move_box_cmd.pop()
        this.move_box_cmd.pop()

        this.move_plr_cmd.push([this.state.player_position[0], this.state.player_position[1], dir])

        x = this.state.player_position[0] + x
        y = this.state.player_position[1] + y

        if (this.checkCollision(levels[0], x, y,dir)) {

            this.setState({ player_position: [x, y] });
            console.log("Player postion:" + this.state.player_position)
            console.log("Move List:" + this.move_plr_cmd)

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

            this.state.layer_background = <TileMap map={levels[0]} />

            this.setState({ new_level: false })
            //
        }

        if (this.state.new_move) {

            for (let i in this.move_box_cmd) { 
                this.move_plr_cmd.push(this.move_box_cmd[i])
                this.move_plr_cmd.reverse()
            }

            this.setState({ layer_entity: <TileMap map={levels[1]} move={this.move_plr_cmd} collision={levels[0]} xy={this.state.player_position} /> });

            this.setState({ new_move: false })
        }

        let GameBackground_width = (levels[0].length*32)+"px"
        let GameBackground_height = (levels[0].length * 32 + 96) + "px"

        let controlSchemeStyle = {
            "position": "fixed",
            "top": (levels[0].length * 32 + 96+32) + "px",
            "left": (levels[0].length * 32)/2-80 + "px",

            "overflow-clip-margin": "0px",
            "overflow": "hidden",

            "z-index": " 1",            
        }

        //this.move_cmd = []//
        //return (<div><TileMap map={levels[0]} /></div>)
        //<div>{this.state.layer_entity}</div>/
        return (
            <div>              
                <div id="board">
                    <GameBackground width={GameBackground_width} height={GameBackground_height} />
                    <div id="layer_background">
                        <div>{this.state.layer_background}</div>
                    </div>
                    
                    <div id="layer_entities">
                        <div>{this.state.layer_entity}</div>
                    </div>
                </div>
                <div id="controlscheme" style={controlSchemeStyle}>
                    <div id="dpad">                    
                        <table id="dpad_table" border="0" cellPadding="0" cellSpacing="0">
                            <tr>
                                <th id="tile"></th>
                                <th id="tile"><MoveButton onClick={() => this.changeXY(0, -1)} value={tileImage(spr_arrow_up)}></MoveButton></th>
                                <th id="tile"></th>
                            </tr>
                            <tr>
                                <th id="tile"><MoveButton onClick={() => this.changeXY(-1, 0)} value={tileImage(spr_arrow_left)}></MoveButton></th>
                                <th id="tile"></th>
                                <th id="tile"><MoveButton onClick={() => this.changeXY(1, 0)} value={tileImage(spr_arrow_right)}></MoveButton></th>
                            </tr>
                            <tr>
                                <th id="tile"></th>
                                <th id="tile"><MoveButton onClick={() => this.changeXY(0, 1)} value={tileImage(spr_arrow_down)}></MoveButton></th>
                                <th id="tile"></th>
                            </tr>
                        </table>
                        </div>
                </div>
            </div>
        )
    }
}
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div id="maingame"><Game /></div>
);*/

export default Game;