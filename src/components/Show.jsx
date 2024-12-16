const Show = (props) => {
  const { tasks, settasks } = props;

  const deletehandler = (i) => {
    const copytasks = [...tasks];
    copytasks.splice(i, 1);
    settasks(copytasks);
    localStorage.setItem("tasks", JSON.stringify(copytasks));
  };

  let rendertask =
    tasks.length > 0 ? (
      tasks.map((t, i) => (
        <li
          className="text-[16px] text-white p-5 font-garamond flex w-full justify-between"
          key={t.id}
        >
          <div className="flex gap-8">
          <input type="checkbox" />
          <span>{t.title}</span>
          </div>

          <i
            onClick={() => deletehandler(i)}
            className="fa-solid fa-trash  hover:text-red-600"
          ></i>
        </li>
      ))
    ) : (
      <h1 className="text-[30px] text-white p-10 font-garamond">
        No Pending Tasks
      </h1>
    );
  return (
    <ul className="w-1/2  text-white bg-slate-950 px-8 list-decimal flex flex-col items-start justify-center  mt-[18%] absolute rounded-2xl   ">
      {rendertask}
    </ul>
  );
};

export default Show;
