import './Operations.css';

const Addition = (props) => {
 
    return (
        <div className="calculs" onClick={props.opeCallBack}>
            <button> {props.operation} </button>
        </div>
    )
}

export default Addition;