import styled from 'styled-components';
import { postUser } from '../../api/admin';
import { useInputs } from '../../hook/useInputs';
import AdminForm from '../admin/AdminForm';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Link } from 'react-router-dom';

function SignUp() {
  const [inputs, handleInputs] = useInputs({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = inputs;

  // active 값이 true일 때만(3가지 폼 모두 작성시) 회원가입 버튼 색 변경
  const active = name !== '' && email !== '' && password !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!active) return; // active가 false라면 submit하지 않고 리턴

    postUser(inputs).then((res) => console.log(res));
  };

  return (
    <AdminForm title='회원가입' onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type='text'
          placeholder='이름을 입력해 주세요'
          name='name'
          onChange={handleInputs}
        />
        <Input
          type='email'
          placeholder='이메일을 입력해 주세요'
          name='email'
          onChange={handleInputs}
        />
        <Input
          type='password'
          placeholder='비밀번호를 입력해 주세요'
          name='password'
          onChange={handleInputs}
        />
      </InputWrapper>
      <BtnWrapper>
        <Button bgColor={active ? 'dodgerblue' : '#ddd'}>회원가입</Button>
        <Link to='/signin'>
          <Button bgColor='black'>취소하기</Button>
        </Link>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div``;
const BtnWrapper = styled.div`
  margin-top: 20px;
`;

export default SignUp;
