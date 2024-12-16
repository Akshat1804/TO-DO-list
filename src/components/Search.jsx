import { useState } from "react";

const Search = (props) => {
  const { tasks } = props;
  const [filtered, setfiltered] = useState([]);

  const searchhandler = (e) => {
    const query = e.target.value;
    const filteredTasks = tasks.filter((t, i) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    );
    if (query.trim().length) {
      setfiltered(filteredTasks);
    } else {
      setfiltered([]);
    }
  };

  let filteredtasks = filtered.map((t, i) => (
    <li
      className="text-[16px] text-white p-5 font-garamond flex w-full justify-between"
      key={t.id}
    >
      {t.title}
    </li>
  ));

  return (
    <div className="absolute top-[6%]">
      <input
        className="w-[80%] h-[30px] ml-7 p-6 text-white rounded-md bg-transparent border-b-2 border-slate-300"
        type="text"
        placeholder="Search"
        onChange={searchhandler}
      />
      <ul className="list-none  rounded  bg-slate-700 text-white absolute z-10">{filteredtasks}</ul>
    </div>
  );
};

export default Search;
