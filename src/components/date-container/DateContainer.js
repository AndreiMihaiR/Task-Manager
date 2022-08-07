import "./DateContainer.css"

function DateContainer(props) {
    return (
        <div className="card-date">
            <p className="noMargin">Due Date</p>
            <p className="noMargin">{props.date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateContainer;
