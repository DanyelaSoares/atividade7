
import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [showPending, setShowPending] = useState(false); // Estado para o filtro

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Adicionar uma tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <button onClick={() => setShowPending(!showPending)}>
        {showPending ? "Mostrar Todas" : "Mostrar Pendentes"}
      </button>
      <ul>
        {tasks
          .filter((task) => !showPending || !task.completed) // Lógica de filtro
          .map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Desfazer" : "Concluir"}
              </button>
              <button onClick={() => removeTask(index)}>Remover</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
