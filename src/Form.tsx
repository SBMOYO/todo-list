import React, { useState } from "react";

interface FormProps {
  onData: (data: string) => void;
}

const Form: React.FC<FormProps> = ({ onData }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return;
    if (event.target.value === " ") return;
    if (event.target.value === "  ") return;
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task === "") return;
    if (task === " ") return;
    if (task === "  ") return;
    onData(task);
    setTask("");
  };

  return (
    <div className="ui raised very padded text container segment">
      <h3 className="ui header">Add Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              value={task}
              onChange={handleTaskChange}
              placeholder="Enter Task"
            />
            <button
              style={{ marginTop: "10px" }}
              className="ui button"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
