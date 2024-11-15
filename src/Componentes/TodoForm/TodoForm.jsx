import { useState } from "react";
import * as style from "./TodoForm.style";

export default function TodoForm({ createTask }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddClick = () => {
    if (task.trim()) {
      createTask(task);
      setTask("");
    }
  };

  return (
    <style.Wrapper>
      <style.TextInput type="text" value={task} onChange={handleInputChange} />
      <style.Button onClick={handleAddClick}>Enviar</style.Button>
    </style.Wrapper>
  );
}
