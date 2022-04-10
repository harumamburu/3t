import {useState} from 'react';

import Board from './board/Board';
import Status from './status/Status';
import History from './history/History';
import './Game.css';
import {calculateWinner} from '../../util/util.js';

const Game = () => {
  const [history, setHistory] = useState([
    {tiles: Array(9).fill(null)}
  ]);
  const [status, setStatus] = useState({isXNext: true, currentMove: 1});
  
  const currentMove = history[history.length - 1];

  const tilecLickhandler = index => {
    const tiles = currentMove.tiles.slice();
    if (calculateWinner(tiles) || tiles[index]) {
      return;
    }

    tiles[index] = status.isXNext ? 'X' : 'O';
    // react will batch-update
    setHistory([...history, {tiles: tiles}]);
    setStatus(() => {
      return {
        isXNext: !status.isXNext,
        currentMove: history.length + 1
      }
    });
  };

  const historyClickHandler = move => {
    // react will batch-update
    setHistory(history.slice(0, move + 1));
    setStatus(() => {
      return {
        isXNext: move % 2 === 0,
        currentMove: move + 1
      }
    });
  };

  return (
    <div className="game">
      <Status status={status} winner={calculateWinner(currentMove.tiles)} />
      <Board tiles={currentMove.tiles} onTileClick={tilecLickhandler} />
      <History history={history} onMoveClick={historyClickHandler} />
    </div>
  );
};

export default Game;
