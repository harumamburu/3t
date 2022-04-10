import './History.css'

const History = (props) => {
  return (
    <div className='game-info'>
      <ol>
        {props.history.map((step, move) => {
            return (
              <li key={move}>
                <button onClick={() => props.onMoveClick(move)}>
                  {move ? 'Go to move #: ' + (move + 1) : 'Go to game start'}
                </button>
              </li>
            );
          })
        }
      </ol>
    </div>
  );
};

export default History;
