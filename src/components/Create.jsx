import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const tasks = props.tasks;
  const settasks = props.settasks;
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: nanoid(),
      title: title,
    };

    const updatedtasks = [...tasks, newTask];
    settasks(updatedtasks);
    settitle("");

    localStorage.setItem("tasks", JSON.stringify(updatedtasks));
  };
  return (
    <form
      onSubmit={submitHandler}
      className="w-1/2 h-[10%] bg-slate-800 flex items-center px-4  mt-[11%] absolute rounded-2xl shadow-lg shadow-slate-500"
    >
      <input
        className="w-[80%] h-[30px] ml-7 p-6 rounded-md bg-transparent border-b-2 border-slate-300 "
        type="text"
        placeholder="Enter your task"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button>
        <i className="fa-solid fa-square-plus ml-8  text-3xl text-slate-300"></i>
      </button>
    </form>
  );
};

export default Create;
