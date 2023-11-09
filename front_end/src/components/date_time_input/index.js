const DateTime = (props) => {
    return ( 
        <div className="date">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="date"
                id={props.id}
                name={props.id}
                className="date"
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
     );
}
 
export default DateTime;