/* eslint-disable no-restricted-globals */
import React from "react";
import Swal from 'sweetalert2'

const Cart = ({ tasks , deleteTask ,updateTask }) => {

   const deleteHandleTask = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Task has been deleted.",
            icon: "success"
          });
          deleteTask(id)
        }
      }); 
   }
   

   
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={task.status ? "list-group-item shadow-sm mb-2 bg-success text-white text-decoration-line-through" : "list-group-item shadow-sm mb-2"}>
          <div className="row">
            <div className="col-10 col-lg-8 offset-lg-2 "><input type="checkbox" className='me-2' onClick={() => updateTask(task.id,!task.status)} defaultChecked={task.status} /> {task.tasks}</div>
            <div className="col-2 col-lg-2">
              <i className="fa-solid fa-trash" onClick={() => deleteHandleTask(task.id)}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
