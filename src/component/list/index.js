import "./style.css";

import { selectData } from "../../features/assignSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { useState } from "react";

const List = ({ ramTask, vinodTask, shayamTask, tasks, setTasks }) => {
  const [current, setCurrent] = useState([]);

  function handleOnRclick() {
    setCurrent(ramTask);
  }
  function handleOnVclick() {
    setCurrent(vinodTask);
  }
  function handleOnSclick() {
    setCurrent(shayamTask);
  }
  return (
    <div className="list">
      <div className="horizontal--list">
        <div className="avatars">
          <div onClick={handleOnRclick} className="avatar">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"></img>
            <p className="counter">{ramTask.length}</p>
          </div>
          <div onClick={handleOnVclick} className="avatar">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"></img>
            <p className="counter">{vinodTask.length}</p>
          </div>
          <div onClick={handleOnSclick} className="avatar">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"></img>
            <p className="counter">{shayamTask.length}</p>
          </div>
        </div>
      </div>
      <div className="detail__pannel">
        <div className="heading">
          <p className="heading--text">Task details</p>
        </div>
        <div className="detail">
          {current.map((e) => (
            <p> {e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
