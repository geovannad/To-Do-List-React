import { useEffect, useRef, useState } from "react";
import * as style from "./TodoItem.style";

export default function TodoItem({
  tasks,
  removeTask,
  changeEdit,
  saveEdit,
  filter,
  finished,
}) {
  const [inputText, setInputText] = useState();
  

//   useEffect(() => {
//     if (filter === 1) {
//       setFilterTasks(tasks.filter((task) => task.completed == true));
//     } else if (filter === 2) {
//       setFilterTasks(tasks.filter((task) => task.completed == false));
//     } else {
//       setFilterTasks(tasks);
//     }
//   }, [filter, tasks]);


  return (
    <style.WrapperFirst>
      <ul>
        {tasks.map((task, index) => (
          <>
            {task.edit ? (
              <>
                <style.TextInput
                  value={task.text}
                  onChange={(e) => setInputText(e.target.value)}
                ></style.TextInput>
                <style.Bt onClick={() => saveEdit(task.id, inputText)}>
                  Salvar
                </style.Bt>, 
              </>
            ) : (
              <>
                <style.List
                  onClick={() => finished(task.id)}
                  type={task.completed}
                >
                  <style.P type={task.completed}>{task.text}</style.P>
                </style.List>
                <style.BtRemover onClick={() => removeTask(task.id)}>
                  Remover
                </style.BtRemover>
                <style.Bt onClick={() => changeEdit(task.id)}>Editar</style.Bt>
              </>
            )}
          </>
        ))}
      </ul>
    </style.WrapperFirst>
  );
}
