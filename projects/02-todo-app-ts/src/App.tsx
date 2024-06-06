import { useState } from "react";
import { Todos } from "./components/Todos";
import { TodoId } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Ver el Twitch de midu",
    completed: true,
  },
  {
    id: "2",
    title: "Texto de ejemplo 2",
    completed: false,
  },
  {
    id: "3",
    title: "Texto de ejemplo 3",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id.id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
