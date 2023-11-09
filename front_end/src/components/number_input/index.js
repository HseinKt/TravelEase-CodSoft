const NumberInput = (props) => {
    return ( 
        <div className="number-input">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="number"
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
     );
}
 
export default NumberInput;
