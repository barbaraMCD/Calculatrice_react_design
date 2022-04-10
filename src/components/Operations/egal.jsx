import './Operations.css';

const Egal = (props) => {


    return (
        <div className="calculs" onClick={props.opeCallBack}>
            <button> {props.operation} </button>
        </div>
    )
}

export default Egal;