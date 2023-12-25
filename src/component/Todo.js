import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({ tas,toggleComplete,toDelete,toEdit}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(tas.id)}
        className={tas.completed ? "completed" : ""}
      >
        {tas.task}
      </p>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>toEdit(tas.id)}/>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick= {()=>toDelete(tas.id)}/>
      </div>
    </div>
  );
};

export default Todo;
