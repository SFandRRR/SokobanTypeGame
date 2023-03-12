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

import background_mountains_dawn from './graphics/background_mountains_dawn.png'
import background_mountains_day from './graphics/background_mountains_day.png'
import background_mountains_dusk from './graphics/background_mountains_dusk.png'
import background_mountains_night from './graphics/background_mountains_night.png'

//https://youtu.be/gI81fuLPz4A
//Superfilm!

const level_background = [
    [
        ["1", "3", "3", "3", "1", "1", "1", "1", "1", "1"],
        ["2", "0", "0", "0", "4", "3", "3", "3", "1", "1"],
        ["2", "0", "0", "0", "0", "0", "0", "0", "2", "1"],
        ["2", "0", "0", "0", "4", "3", "4", "0", "2", "1"],
        ["1", "3", "3", "3", "1", "1", "2", "0", "2", "1"],
        ["1", "3", "3", "3", "1", "1", "2", "0", "2", "1"],
        ["2", "0", "0", "0", "4", "3", "4", "0", "4", "1"],
        ["2", "0", "0", "0", "0", "0", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "4", "4", "0", "0", "0", "2"],
        ["1", "3", "3", "3", "1", "1", "3", "3", "3", "1"],
    ],
    [
        ["1", "3", "3", "3", "1"],
        ["2", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "2"],
        ["2", "0", "0", "0", "2"],
        ["1", "3", "3", "3", "1"]
    ],
    [
        ["1", "3", "1"],
        ["2", "0", "2"],
        ["1", "3", "1"]
    ]
]

const level_entity = [
    [
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", "S", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", "B", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", "E", " ", " ", "B", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ],
    [
        [" ", " ", " ", " ", " "],
        [" ", " ", "E", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", "B", " ", " "],
        [" ", " ", "B", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", "S", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
    ],
    [
        [" ", " ", " "],
        [" ", "S", " "],
        [" ", " ", " "],
    ]
]
/*
function functionOne(testInput) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log("Inside the promise");
                resolve();
            }, 3000
        );
    });
};
*/



function tileImage(graphic, id = "") {

    return (<img className="tile_img" id={id} src={graphic} />)
}

function tileInterpreter(tilemap) {

    console.log("Interpreting tiles")
    let new_tilemap = tilemap
    let maxY = tilemap.length

    for (let y in tilemap) {
        for (let x in tilemap[y]) {
            let tile = tilemap[y][x]

            if (tile == 4) {


                if ((tilemap[y][x - 1] == 3 || tilemap[y][x - 1] == 1 || tilemap[y][x - 1] == 4 )&& tilemap[y][(parseInt(x) + 1)] == 0) {
                    if (tilemap[(parseInt(y) + 1)][x] == 0) {
                        new_tilemap[y][x] = tileImage(spr_border_corner_right_bottom, "solid")
                    } else {
                        new_tilemap[y][x] = tileImage(spr_border_corner_right, "solid")
                    }

                }

                if (tilemap[y][x - 1] == 0 && (tilemap[y][(parseInt(x) + 1)] == 3 || tilemap[y][(parseInt(x) + 1)] == 1 || tilemap[y][(parseInt(x) + 1)] == 4)) {
                    if (tilemap[(parseInt(y) + 1)][x] == 0) {
                        new_tilemap[y][x] = tileImage(spr_border_corner_left_bottom, "solid")
                    } else {
                        new_tilemap[y][x] = tileImage(spr_border_corner_left, "solid")
                    }
                } else {
                    if (tilemap[(parseInt(y) + 1)][x] == 0) {
                        new_tilemap[y][x] = tileImage(spr_border_corner_right_bottom, "solid")
                    } else {
                        new_tilemap[y][x] = tileImage(spr_border_corner_right, "solid")
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
                } else if (y != 0 && tilemap[y - 1][x] == 0) {
                    if (!(tilemap[y - 1][x] == 0)) { new_tilemap[y][x] = tileImage(spr_border_bottom, "solid") } else {
                        if (tilemap[y][x] == 3) {
                            if (tilemap[y][x - 1] == 1) {
                                new_tilemap[y][x] = tileImage(spr_border_bottom_left, "solid")
                            } else 
                            if (tilemap[y][(parseInt(x) + 1)] == 1) {
                                new_tilemap[y][x] = tileImage(spr_border_bottom_right, "solid")
                            } else {
                                new_tilemap[y][x] = tileImage(spr_border_bottom, "solid")
                            }
                        }
                    }

                } else if (tilemap[(parseInt(y) + 1)][x] == 0) {
                    new_tilemap[y][x] = tileImage(spr_border_top, "solid")
                } else if (tilemap[y][(parseInt(x) + 1)] == 4 && tilemap[y][x-1] == 4){
                    //new_tilemap[y][x] = tileImage(spr_border_bottom_right, "solid")
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
            if (tilemap[y][x] == "E") {
                new_tilemap[y][x] = tileImage(spr_ladder, "exit")
            }
        }
    }
    tilemap = new_tilemap
    console.log("processed tile map")
    return new_tilemap;
}

function moveTiles(map, move_cmd) {

    for (let i in move_cmd) {
        console.log("issued a move: " + move_cmd[i])
        singleMove(map, move_cmd[i][0], move_cmd[i][1], move_cmd[i][2])
    }
}

function singleMove(map, x, y, dir) {
    let tile = map[y][x]
    
    if (tile == "S" || tile == "" || tile == " ") {
        console.log("-")
        console.log("Something hella wrong in single Move")
        console.log(map)
        console.log(tile)
        console.log("Most likely caused by a missing entity map")
        console.log("-")
        return null
    }

    let specialid =""
    switch (dir) {
        case "N":
            if (y == 0) { break; }
            specialid = tile.props.id
            if (specialid == "player") { tile = tileImage(spr_player_n, "player") }
            map[y - 1][x] = tile
            map[y][x] = " "
            break;

        case "S":
            specialid = tile.props.id
            if (specialid == "player") { tile = tileImage(spr_player_s, "player") }
            map[y + 1][x] = tile
            map[y][x] = " "
            break;

        case "E":
            specialid = tile.props.id
            if (specialid == "player") { tile = tileImage(spr_player_e, "player") }
            map[y][x + 1] = tile
            map[y][x] = " "

            break;
        case "W":
            if (x == 0) { break; }
            specialid = tile.props.id
            if (specialid == "player") { tile = tileImage(spr_player_w, "player") }
            map[y][x - 1] = tile
            map[y][x] = " "
            break;

        default:
            break;
    }
}

class TileMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile_map: this.props.map,
        }
    }

    render() {

        let content = [];
        let { tile_map } = this.state;

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
            height: this.props.height,
            level: this.props.height
        }
    }

    render() {

        let background = background_mountains_dusk
        switch (this.props.level) {
            case 0:
                background = background_mountains_dawn
                break;
            case 1:
                background = background_mountains_day
                break;
            case 2:
                background = background_mountains_dusk
                break;
            case 3:
                background = background_mountains_night
                break;
            default:
                break;
        }

        let gameBackgroundStyle = {
            "position": "fixed",
            "top": "0px",
            "left": "0px",

            "overflowClipMargin": "0px",
            "overflow": "hidden",

            "zIndex": " -1",

            "width": this.props.width,
            "height": this.props.height,

        }

        let content = < img className="backgroundImage" src={background} />

        return (
            <div id="gamebackground" style={gameBackgroundStyle} >
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
            exit_found: false,
            canMove : true,

            current_level: 0,
            current_background: [],
            current_entities: [],

            layer_background: null,
            layer_entity: null

        }
    }
    GameBackground_height = 0
    GameBackground_width = 0
    move_cmd = []
    move_plr_cmd = []
    move_box_cmd = []
    checkCollision(x, y, dir) {


        //console.log("trolled")
        //console.log(this.state.current_background)
        //console.log(this.state.current_entities)

        if (this.state.current_background[y][x] == 0) {
            return true
        }

        if (this.state.current_entities[y][x].props.id == "exit") {

            console.log("That's an exit!")
            this.setState({ exit_found: true })
            return false
        }

        if (this.state.current_background[y][x].props.id == "solid") {
            console.log("collision : solid")
            return false
        }
        if (this.state.current_entities[y][x].props.id == "box") {
            console.log("collision : box, checking")

            switch (dir) {
                case "N":
                    y = y - 1
                    break;

                case "S":
                    y = y + 1
                    break;

                case "E":
                    x = x + 1
                    break;

                case "W":
                    x = x - 1
                    break;

                default:
                    break;
            }
            if (this.state.current_entities[y][x].props.id == "exit") {
                console.log("collision : exit")
                return false
            }
            if (this.state.current_background[y][x].props.id == "solid") {
                console.log("collision : unmovable")
                return false
            }
            if (this.state.current_entities[y][x].props.id == "box") {
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

        if (this.state.canMove) { 

            this.setState({canMove:false})

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

        

        x = this.state.player_position[0] + x
        y = this.state.player_position[1] + y

        if (this.checkCollision(x, y, dir)) {

            this.move_plr_cmd.push([this.state.player_position[0], this.state.player_position[1], dir])

            this.setState({ player_position: [x, y] });
            console.log("Player postion:" + this.state.player_position)
            console.log("Move List:" + this.move_plr_cmd)

        }
        }  

        this.setState({ new_move: true })
    }

    functionOne(time) {
    return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    console.log("done")

                    resolve();
                }, time
            )
        })
    }

    state_exit_found(time) {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    if (this.state.exit_found) {

                        this.setState({ current_level: this.state.current_level + 1 })
                        this.setState({ new_level: true })
                        this.setState({ new_move: true })

                        this.setState({ layer_background: null, layer_entity: null });

                        this.setState({ current_entities: [], current_background: [] });

                        this.setState({ player_position: [0, 0] });


                        this.move_cmd = []
                        this.move_plr_cmd = []
                        this.move_box_cmd = []

                        console.log("We are changing levels")
                        this.setState({ exit_found: false })
                    }
                    console.log("exit found processed")
                    resolve();
                }, time
            )
        })
    }

    state_new_level(time) {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    if (this.state.new_level) {

                        this.state.current_entities = level_entity[this.state.current_level]
                        this.state.current_background = level_background[this.state.current_level]

                        let starter_pos = this.state.current_entities

                        for (let y in starter_pos) {
                            for (let x in starter_pos[y]) {
                                if (starter_pos[y][x] == "S") {
                                    console.log("Start position found! " + x + " " + y)
                                    this.state.player_position = [parseInt(x), parseInt(y)]
                                    console.log(this.state.player_position)
                                    break;
                                }
                            }
                        }

                        this.setState({ layer_background: < TileMap map={this.state.current_background} /> });
                        this.setState({ layer_entity: < TileMap map={this.state.current_entities} /> });


                        this.setState({ new_level: false })

                        //console.log("Level")
                        //console.log("State new_level set to " + this.state.new_level)
                        //console.log("State new_move set to " + this.state.new_move)
                    }
                    console.log("new level processed")
                    resolve();
                }, time
            )
        })
    }

    state_new_move(time) {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    if (this.state.new_move) {

                        for (let i in this.move_box_cmd) {
                            this.move_plr_cmd.push(this.move_box_cmd[i])
                            this.move_plr_cmd.reverse()
                        }

                        moveTiles(this.state.current_entities, this.move_plr_cmd, this.state.current_background, this.state.player_position)

                        this.setState({ layer_entity: <TileMap map={this.state.current_entities} /> });

                        this.setState({ new_move: false })

                        //console.log("Move")
                        //console.log("State new_level set to " + this.state.new_level)
                        //console.log("State new_move set to " + this.state.new_move)

                    }
                    console.log("new move processed")
                    resolve();
                }, time
            )
        })
    }

    render() {
        if (this.state.exit_found) {
            this.state_exit_found(500).then(res => {


                if (this.state.new_level) {
                    this.state_new_level(50).then(res => {

                        this.state_new_move(50).then(res => {
                            this.setState({ canMove: true })
                        })
                    })
                } else {
                    this.state_new_move(50).then(res => {
                        this.setState({ canMove: true })
                    })
                }
            })
        } else {
            if (this.state.new_level) {
                this.state_new_level(50).then(res => {

                    this.state_new_move(50).then(res => {
                        this.setState({ canMove: true })
                    })
                })
            } else {
                this.state_new_move(50).then(res => {
                    this.setState({ canMove: true })
                })
            }
        }

        this.GameBackground_width = (level_background[this.state.current_level].length * 32+64) + "px"
        this.GameBackground_height = (this.state.current_background.length * 32 + 96) + "px"

        let controlSchemeStyle = {
            "position": "fixed",        
            "top": (this.state.current_entities.length * 32 + 96 + 32) + "px",
            "left": (level_background[this.state.current_level].length * 32) / 2 - 48 + "px",

            "overflowClipMargin": "0px",
            "overflow": "hidden",

            "zIndex": " 1",
        }

        

        return (
            <div>
                <div id="board">
                    <GameBackground width={this.GameBackground_width} height={this.GameBackground_height} level={this.state.current_level} />
                    <div id="layer_background">
                        {this.state.layer_background}
                    </div>

                    <div id="layer_entities">
                        {this.state.layer_entity}
                    </div>
                </div >
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
                {this.state.player_position}
            </div>
        )
    }
}

export default Game;