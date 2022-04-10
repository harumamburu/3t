import {useState} from 'react';

import Tile from './Tile';
import './Board.css';

const Board = props => {
  const renderTile = index =>
      <Tile value={props.tiles[index]}
            onClick={() => props.onTileClick(index)}
      />

  return (
    <div>  
      <div>
        <div className="board-row">
          {renderTile(0)}
          {renderTile(1)}
          {renderTile(2)}
        </div>
        <div className="board-row">
          {renderTile(3)}
          {renderTile(4)}
          {renderTile(5)}
        </div>
        <div className="board-row">
          {renderTile(6)}
          {renderTile(7)}
          {renderTile(8)}
        </div>
      </div>
    </div>  
  );
};

export default Board;
