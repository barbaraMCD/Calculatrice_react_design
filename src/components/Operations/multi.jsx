import './Operations.css';

const Multi = (props) => {


    return (
        <div className="calculs" onClick={props.opeCallBack}>
            <button> {props.operation} </button>
        </div>
    )
}

export default Multi;