import './numbers.css';

const Numbers = (props) => {

    
    return (
            <button className="numbers" onClick={props.clickCallBack}> {props.number} </button>
    )
}
export default Numbers;