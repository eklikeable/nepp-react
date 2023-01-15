import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { searchUser } from '../../api/admin';
import useDebounce from '../../hook/useDebounce';
import { Button } from '../common/button';
import { Input } from '../common/input';
import UserInfo from '../common/UserInfo';

function Search() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);

  // 300ms 이내의 입력값은 반영을 안하고 delay시키다가 데이터를 요청
  const debounceSearch = useDebounce(input, 300);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (input === '') return;
      const data = await searchUser(input);
      setUsers(data.data);
    };

    fetchUsers();
  }, [input, debounceSearch]);

  return (
    <Container>
      <InputBox>
        <Input
          type='text'
          placeholder='검색할 이름을 입력해 주세요'
          onChange={handleInput}
        />
        {/* <Button onClick={fetchUsers}>검색</Button> */}
      </InputBox>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>
            <UserInfo user={user} />
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  padding: 5px 10px;
`;
const UserItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const UserList = styled.ul`
  height: 90%;
  overflow-y: auto;
  flex: 1;
`;
export default Search;
