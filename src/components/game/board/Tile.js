import './Tile.css';

const Tile = props =>
    <button className="tile" onClick={props.onClick}>
      {props.value}
    </button>

export default Tile;
