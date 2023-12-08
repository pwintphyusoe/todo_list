import React, { useState } from "react";
import Form from "./Form";
import Swal from "sweetalert2";

const List = ({ tasks, submitTask, deleteTask, updateTask }) => {
  const [userTask, setUserTask] = useState("");

  const handleSubmitTask = () => {
    if (userTask !== "") {
      submitTask(userTask);
      setUserTask("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your Task Name is required!",
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-dark mb-3">React To Do List Project</h1>
      <div className="row">
        <div className="col-10 offset-1 offset-lg-0 col-lg-6">
          <div className="row">
            <div className="col-lg-9 mb-3">
              <input
                type="text"
                value={userTask}
                onChange={(e) => setUserTask(e.target.value)}
                className="form-control"
                placeholder="Enter task..."
              />
            </div>
            <div className="col-lg-3 mb-3">
              <button
                className="btn btn-primary"
                onClick={() => handleSubmitTask(userTask)}
              >
                <i className="me-1 fa-solid fa-plus"></i>Add
              </button>
            </div>
          </div>
        </div>
        <div className="col-10 offset-1 offset-lg-0 col-lg-6">
          <Form tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
      </div>
    </div>
  );
};

export default List;
