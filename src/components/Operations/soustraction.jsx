import './Operations.css';

const Soustraction = (props) => {


    return (
        <div className="calculs" onClick={props.opeCallBack}>
            <button> {props.operation} </button>
        </div>
    )
}

export default Soustraction;