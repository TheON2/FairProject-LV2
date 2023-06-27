import {produce} from "immer";

export const initialState = {
  todos:[{ id:1,title: 1, content: '송중기' ,done:false},
    { id:2,title: 1, content: '송중기',done:false },
    { id:3,title: 1, content: '송중기' ,done:true},
    { id:4,title: 1, content: '송중기',done:false },]
}

export const UPDATE_TODOS_REQUEST = 'UPDATE_TODOS_REQUEST'
export const DELETE_TODOS_REQUEST = 'DELETE_TODOS_REQUEST'

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type){
    case UPDATE_TODOS_REQUEST:
      draft.todos = draft.todos.map((todo) => {
        if(todo.id === action.data) return { ...todo, done: !(todo.done) };
        return todo;
      });
      break;
    case DELETE_TODOS_REQUEST:
      draft.todos = draft.todos.filter((todo) => todo.id !== action.data)
      break;
  }
})
export default reducer