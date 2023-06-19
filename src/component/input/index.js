import "./style.css";

import { selectData, counter } from "../../features/assignSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { useState } from "react";

const List = ({ setVinodTask, setRamTask, setShyamTask, tasks, setTasks }) => {
  const data = useSelector(selectData);
  const [task, setTask] = useState("");
  const [assignee, setAssignee] = useState("");
  const [date, setDate] = useState("2018-07-22");

  function handleOnSubmit(e) {
    e.preventDefault();

    console.log(task);
    console.log(assignee);

    if (assignee == "vinod") {
      console.log("🔥");
      setVinodTask((state) => {
        return [...state, task];
      });
    }

    if (assignee == "ram") {
      console.log("🔥");
      setRamTask((state) => {
        return [...state, task];
      });
    }

    if (assignee == "shyam") {
      console.log("🔥");
      setShyamTask((state) => {
        return [...state, task];
      });
    }
  }

  function handleOnTaskClick(e) {
    setTask(e.target.value);
  }
  function handleOnDateClick(e) {
    setDate(e.target.value);
  }

  function handleSelectChange(e) {
    setAssignee(e.target.value);
  }

  return (
    <div className="input">
      <div className="form">
        <form onSubmit={handleOnSubmit}>
          <div className="task--input">
            <input
              value={task}
              onChange={handleOnTaskClick}
              placeholder="Enter your task"
              required
              type="text"
            ></input>
          </div>
          <div className="inner">
            <div className="task--search">
              <select
                onChange={handleSelectChange}
                value={assignee}
                name="cars"
                id="op"
              >
                {data.map((e) => {
                  return <option value={e["name"]}>{e["name"]}</option>;
                })}
              </select>
            </div>
            <div className="task--date">
              <input
                value={date}
                onChange={handleOnDateClick}
                required
                type="date"
              ></input>
            </div>
          </div>
          <div className="task--submit">
            <button>Assign Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
