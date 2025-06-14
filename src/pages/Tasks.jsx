import React, { useState } from "react";
import "../css/Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Belajar React", completed: false },
    { id: 2, title: "Implementasi Authentication", completed: true },
    { id: 3, title: "Deploy Aplikasi", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [showCompleted, setShowCompleted] = useState(false); // state untuk toggle

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="tasks-container">
      <h1>My Tasks</h1>
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="task-input"
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="tasks-list">
        {activeTasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.title}</span>
            <div className="task-actions">
              <button onClick={() => toggleTask(task.id)} className="toggle-btn">
                Tandai Selesai
              </button>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">
                Hapus
              </button>
            </div>
          </div>
        ))}

        {completedTasks.length > 0 && (
          <div className="completed-section">
            <button
              onClick={() => setShowCompleted(!showCompleted)}
              className="dropdown-btn"
            >
              {showCompleted ? "Sembunyikan" : "Tampilkan"} Tugas Selesai ({completedTasks.length})
            </button>

            {showCompleted && (
              <div className="completed-tasks">
                {completedTasks.map((task) => (
                  <div key={task.id} className="task-item completed">
                    <span>{task.title}</span>
                    <div className="task-actions">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="toggle-btn"
                      >
                        Tandai Belum Selesai
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="delete-btn"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
