import React, { Component } from 'react';
import './Hex.scss';

class HexGrid extends Component {
    hexGrid(h, w) {
        let black_hexes = [[0, 6], [0, 10], [0, 11], [1, 6], [2, 11], [2, 12], [2, 13], [2, 14], [3, 8], [3, 9], [3, 12], (2) [4, 11], [5, 6], [5, 8], [5, 10], [5, 11], [5, 12], [5, 13], [6, 8], [6, 14], [7, 10], [8, 14], [9, 8], [9, 10], [9, 14]];
        let grid = []
        // let color=0xffc170;//0xf5c4de;
        let rgb = [0,175,175]
        let down = false;
        for(let i=0; i<h; i++){
            let row = []
            for (let j=0; j<w; j++){
                
                if(rgb[2]>254) down=true
                if(rgb[2]<190) down=false
                rgb[2]+= down ? -8 : 8;

                // let color = Math.random()+(0.02*j) - (0.01*(w-j))>.95 ? "black" : "rgb("+rgb.join(',')+")"
                let color = black_hexes.includes([i,j]) ? "black" : "rgb("+rgb.join(',')+")"

                // if(color=="black") black_hexes.push([i,j]);
                row.push(
                    <li>
                        <div className="hexagon" key={"hex_"+j} style={{"background": color}}></div>
                    </li>
                )
               
            }
            grid.push(
                <div className="row" id={"row_"+i}  key={"row_"+i}>
                    {row}
                </div>
            )
        }
        return grid
    }
    render() {
        return (
            <div id='grid_wrapper'>
                <div id="grid" className="clear">
                    {this.hexGrid(10,15)}
                </div>
            </div>
        );
    }
} 
export default HexGrid;