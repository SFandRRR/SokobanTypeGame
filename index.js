import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const levels =[
  [
  ["a","a","b","a","c"],
  ["b","a","a","b","c"],
  ["a","b","a","a","c"],
  ["a","b","a","a","c"],
  ["a","a","b","a","c"]
],
[
  ["s","s","s","s","s"],
  ["s","s","s","s","s"],
  ["s","s","s","s","s"]
]
]

class Background extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        tile_map: this.props.map
    }
  }

  renderTile(graphic){
    return (
      <p>{graphic}</p>
    )
  }

  render(){

    const {tile_map} = this.state;
    let content = [];

    for(let i in tile_map) {
      let tile_map_row = [];

      for(let z in tile_map[i]){
        tile_map_row.push(<th id="tile">{this.renderTile(tile_map[i][z])}</th>);
      }
      content.push(<tr>{tile_map_row}</tr>)
    }

    return(
        <div>
          <table>
            {content}
          </table>
        </div>

    )
  } 
}

class Game extends React.Component {

  render(){
    return (
      <div>
        <Background id="relative" map = {levels[0]}/>
        <Background id="absolute" map = {levels[1]}/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div id="maingame"><Game /></div>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
