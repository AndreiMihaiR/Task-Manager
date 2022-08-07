import "./TaskCard.css";

function taskCard (props) {
    // const id = "T-1";
    // const status = "Todo";
    // const name = "Create a Design System for Enum Workspace.";
    // const dueDate = new Date(2022, 7, 7);
    
    return (<div className="card-wrapper">
        <div className="card-header">
            <p className="task-id">{props.id}</p>
            <div className="badge">
                <p>{props.status}</p>
            </div>
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