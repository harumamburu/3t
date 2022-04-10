import './Status.css';

const Status = (props) => {
  const status = props.winner
    ? 'Winner: ' + props.winner
    : 'Next Player: ' + (props.status.isXNext ? 'X' : 'O');
  
  return (
    <div className="status">
      <div>{"Currnet move is " + props.status.currentMove}</div>
      <div>{status}</div>
    </div>
  );
};

export default Status;
