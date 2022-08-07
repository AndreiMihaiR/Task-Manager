import "./TaskCard.css";
import Badge from "../badge/Badge"
function taskCard (props) {
       
    return (<div className="card-wrapper">
        <div className="card-header">
            <p className="task-id">{props.id}</p>
            <Badge status ={props.status}/>
        </div>
        <div className="card-content">
            <p>{props.name}</p>
        </div>
        <div className="card-footer">
            <div className="card-date">
                <p className="noMargin">Due Date</p>
                <p className="noMargin">{props.dueDate.toLocaleDateString()}</p>
            </div>
        </div>
    </div>)
}
export default taskCard;