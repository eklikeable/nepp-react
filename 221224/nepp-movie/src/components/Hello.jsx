import React from 'react';
import { useNavigate } from 'react-router-dom';

export const users = [
  { id: 1, name: 'seok', email: '123@gmail.com' },
  { id: 2, name: 'ek', email: 'ek@gmail.com' },
  { id: 3, name: 'apple', email: 'jobs@google.com' },
];

function Hello() {
  const navigate = useNavigate();
  const onChangeLink = (id) => {
    if (window.confirm('이동하시겠습니까?')) navigate(`/hello/${id}`);
  };

  return (
    <div>
      <h1>Hello</h1>
      <p>Hello 페이지 입니다</p>
      <ul>
        {users.map((user) => (
          <li>
            <p onClick={() => onChangeLink(user.id)}>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hello;
