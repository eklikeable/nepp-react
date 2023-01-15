import styled from 'styled-components';
import { postUser } from '../../api/admin';
import { useInputs } from '../../hook/useInputs';
import AdminForm from '../admin/AdminForm';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

function SignUp() {
  const [inputs, handleInputs] = useInputs({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = inputs;

  // active 값이 true일 때만(3가지 폼 모두 작성시) 회원가입 버튼 색 변경
  const active = name !== '' && email !== '' && password !== '';

  const navigate = useNavigate();

  // react-query 써보기
  const signUpMutate = useMutation(postUser, {
    onMutate: (form) => {
      console.log(form); // mutate가 되는 순간에도 콜백함수를 넣어줄수있다
    },
    onSuccess: () => {
      alert('회원가입에 성공했습니다');
      navigate('/signin');
    },
    onError: (err) => alert(err.response.data.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!active) return; // active가 false라면 submit하지 않고 리턴

    /* ✨아래 코드는 react-query로 대체됨
    postUser(inputs)
    .then(() => {
      alert('회원가입에 성공했습니다');
      navigate('/signin');
    })
    .catch((err) => {
      alert(err.message);
    });
    */
    signUpMutate.mutate();
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
