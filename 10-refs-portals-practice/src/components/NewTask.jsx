import { useState } from "react";

export const NewTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    onAddTask(task);
    setTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        value={task}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};
