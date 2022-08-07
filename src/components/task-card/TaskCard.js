import "./TaskCard.css";

function taskCard () {
    const taskId = "T-1";
    const taskStatus = "Todo";
    const taskName = "Create a Design System for Enum Workspace.";
    const dueDate = new Date(2022, 7, 7);
    
    return (<div className="card-wrapper">
        <div className="card-header">
            <p className="task-id">{taskId}</p>
            <div className="badge">
                <p>{taskStatus}</p>
            </div>
        </div>
        <div className="card-content">
            <p>{taskName}</p>
        </div>
        <div className="card-footer">
            <div className="card-date">
                <p className="noMargin">Due Date</p>
                <p className="noMargin">{dueDate.toLocaleDateString()}</p>
            </div>
        </div>
    </div>)
}
export default taskCard;
