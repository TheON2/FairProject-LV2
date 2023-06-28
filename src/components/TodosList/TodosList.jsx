import { TodoCard } from "components";
import { ListContainer } from "./style";

export const TodosList = ({ todos = [] }) => {
  return (
    <ListContainer>
      <h2 className="list-title">Working.. 🔥</h2>
      {todos
        .filter((a) => a.done === false)
        .map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      <h2 className="list-title">Done..! 🎉</h2>
      {todos
        .filter((a) => a.done === true)
        .map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
    </ListContainer>
  );
};
