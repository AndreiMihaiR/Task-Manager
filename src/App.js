import "./App.css";
import TaskCard from "./components/task-card/TaskCard";
function App() {
  // const id = "T-1";
  // const status = "Todo";
  // const name = "Create a Design System for Enum Workspace.";
  // const dueDate = new Date(2022, 7, 7);

  const data = [
    {
      id: "T-2",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 7, 7),
    },
    {
      id: "T-3",
      status: "In progres",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 7, 7),
    },
    {
      id: "T-4",
      status: "Done",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 7, 7),
    }
  ]

  return <div className="app-container">
    <TaskCard
    id= {data[0].id}
    status= {data[0].status}
    name= {data[0].name}
    dueDate= {data[0].dueDate}
    />
    <TaskCard
    id= {data[1].id}
    status= {data[1].status}
    name= {data[1].name}
    dueDate= {data[1].dueDate}
    />
    <TaskCard
    id= {data[2].id}
    status= {data[2].status}
    name= {data[2].name}
    dueDate= {data[2].dueDate}
    />
  </div>;
}

export default App;