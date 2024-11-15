import { useState } from "react";
import * as style from "./TodoApp.style";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

export default function TodoApp() {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState([]);
  

  const createTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
      edit: false,
    };
    setTask([...tasks, newTask]);
  };

  const remove = (removeId) => {
    setTask(tasks.filter((task) => task.id != removeId));
    console.log(removeId);
  };

  const edit = (id) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...tasks, edit: true } : task))
    );
    
  };
  const saveText = (id, newText) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...tasks, text: newText } : task))
    );
  };

  const finished = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTaksNew = tasks.filter((task) => {
    if(filter === 1) return task.completed;
    if(filter === 2) return !task.completed;
    return true;
  })

  return (
    <style.Wrapper>
      <style.Title>Lista de tarefas</style.Title>
      <TodoForm createTask={createTask} />
      <button onClick={() =>setFilter(1)}>Completa</button>
      <button onClick={() =>setFilter(2)}>Não Completa</button>
      <button onClick={() =>setFilter(3)}>todas</button>

      <TodoItem
        finished={finished}
        removeTask={remove}
        saveEdit={saveText}
        changeEdit={edit}
        tasks={filterTaksNew}
        filter={filter}
      />
    </style.Wrapper>
  );
}
