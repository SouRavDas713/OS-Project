import React from "react";
import TaskForm from "./TaskForm"; // ✅ import your component

const App = () => {
  // this will receive the tasks when you click "✅ Complete"
  const handleTasksSubmit = (tasks) => {
    console.log("Tasks from form:", tasks);
    // you can do whatever you want with `tasks` here
  };

  return (
    <>
      <TaskForm onSubmit={handleTasksSubmit} />
    </>
  );
};

export default App;
