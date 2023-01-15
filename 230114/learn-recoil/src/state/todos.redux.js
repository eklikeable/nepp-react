export function todosReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return state.concat({ id: action.id, text: action.text, done: false });
    case 'REMOVE_TODO':
      return state.filter((todo) => action.id !== todo.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
