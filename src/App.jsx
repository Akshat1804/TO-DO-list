import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Search from "./components/Search";

const App = () => {
  // const [items, setitems] = useState("");
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  return (
    <div className="w-full h-screen flex flex-col bg-black  items-center ">
      <nav className="w-full h-[30%]  flex justify-between">
        <h1 className="text-2xl text-white p-10 font-garamond ">Todo App</h1>
        <div className="text-[16px] text-white p-10 font-garamond flex gap-3">
          <h1 className= " cursor-pointer h-[20%] hover:text-blue-600">Account</h1>
          <h1 className= " cursor-pointer h-[20%] hover:text-blue-600">Login</h1>
        </div>
      </nav>
     <Search tasks={tasks}  />
     { <Create tasks={tasks} settasks={settasks} />}
     { <Show tasks={tasks} settasks={settasks} />}
    </div>
  );
};

export default App;
