import './clear.css';

const Clear = (props) => {


    return (
        <div className="clear" onClick={props.opeCallBack}>
            <button> {props.operation} </button>
        </div>
    )
}

export default Clear;