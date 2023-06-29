import { produce } from "immer";

export const initialState = {
  todos: [{
    id: 1,
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    done: false
  },
    {
      id: 2,
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      done: true
    }],
};

export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
export const UPDATE_TODOS_REQUEST = "UPDATE_TODOS_REQUEST";
export const DELETE_TODOS_REQUEST = "DELETE_TODOS_REQUEST";

export const addTodos = (payload) => {
  return {
    type: ADD_TODOS_REQUEST,
    payload,
  };
};

// add-todo 유효성 검사
const isValidTodo = (payload) => {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "id" in payload &&
    "title" in payload &&
    "content" in payload &&
    "done" in payload
  );
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TODOS_REQUEST:
        if (isValidTodo(action.payload)) {
          draft.todos.push(action.payload);
        } else {
          console.warn("유효하지 않은 형식입니다(ADD_TODO)", action.payload);
        }
        break;

      case UPDATE_TODOS_REQUEST:
        draft.todos = draft.todos.map((todo) => {
          if (todo.id === action.data) return { ...todo, done: !todo.done };
          return todo;
        });
        break;

      case DELETE_TODOS_REQUEST:
        draft.todos = draft.todos.filter((todo) => todo.id !== action.data);
        break;

      default:
        return state;
    }
  });

export default reducer;
