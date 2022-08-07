import "./Badge.css"

function badge(props) {
    return (
        <div className="badge">
          <p>{props.status}</p>
        </div>

    );
    
}

export default badge;