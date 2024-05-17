import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleDataFromForm = (data: string) => {
    setTaskList([...taskList, data]);
  };

  const handleDeleteDataFromList = (data: number) => {
    setTaskList(taskList.filter((_, i) => i !== data));
  };

  return (
    <div className="ui text container" style={{ marginTop: "40px" }}>
      <h1>Todo List</h1>
      <Form onData={handleDataFromForm} />
      <List data={taskList} onDelete={handleDeleteDataFromList} />
    </div>
  );
};

export default App;
