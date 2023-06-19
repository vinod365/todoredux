import Input from "../../component/input";
import List from "../../component/list";
import "./style.css";

import { selectData } from "../../features/assignSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {
  const data = useSelector(selectData);

  const [tasks, setTasks] = useState(data);

  const [vinodTask, setVinodTask] = useState([]);
  const [ramTask, setRamTask] = useState([]);

  const [shayamTask, setShayamTask] = useState([]);

  console.log(ramTask);

  return (
    <div className="home">
      <Input
        vinodTask={vinodTask}
        setVinodTask={setVinodTask}
        ramTask={ramTask}
        setRamTask={setRamTask}
        shayamTask={shayamTask}
        setShyamTask={setShayamTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <List
        vinodTask={vinodTask}
        setVinodTask={setVinodTask}
        ramTask={ramTask}
        setRamTask={setRamTask}
        shayamTask={shayamTask}
        setShyamTask={setShayamTask}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default Home;
