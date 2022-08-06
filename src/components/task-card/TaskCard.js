import "./TaskCard.css";

function taskCard () {
    return (<div className="card-wrapper">
        <div className="card-header">
            <p className="task-id">T-1</p>
            <div className="badge">
                <p>Todo</p>
            </div>
        </div>
        <div className="card-content">
            <p>Create a Design System for Enum Workspace.</p>
        </div>
        <div className="card-footer">
            <div className="card-date">
                <p className="noMargin">Due Date</p>
                <p className="noMargin">6/8/2022</p>
            </div>
        </div>
    </div>)
}
export default taskCard;