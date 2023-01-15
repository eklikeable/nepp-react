import { atom, selector } from 'recoil';

export const todosState = atom({
  key: 'todos',
  default: [
    {
      id: 1,
      text: '투두리스만들기',
      done: true,
    },
    { id: 2, text: '리코일 배우기', done: true },
  ],
});

export const undoneCountState = selector({
  key: 'undoneCountState',
  get: ({ get }) => {
    const todos = get(todosState);

    return todos.filter((todo) => !todo.done).length;
  },
});

export const countState = selector({
  key: 'doneCountstate',
  get: ({ get }) => get(todosState).length,
});

export const filterState = atom({
  key: 'filterState',
  default: 'done',
});

export const filterdTodosState = selector({
  key: 'filteredTodosState',
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todosState);

    switch (filter) {
      case 'done':
        return todos.filter((todo) => todo.done);
      case 'undone':
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  },
});
