import styled from 'styled-components';
import { getCurrentUser, postSignIn } from '../../api/admin';
import { useInputs } from '../../hook/useInputs';
import AdminForm from '../admin/AdminForm';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserIdDispatch } from '../../data/auth';

function SignIn() {
  const [inputs, handleInputs] = useInputs({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const active = email !== '' && password !== '';
  const navigate = useNavigate();

  const dispatch = useUserIdDispatch(); // 이름을 dispatch로 지었을뿐.. setUserId함수

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!active) return; // active가 false라면 submit하지 않고 리턴
    await postSignIn(inputs);

    const user = await getCurrentUser();
    console.log(`유저아이디 : ${user.id}`);
    dispatch(user.id);
    // 로그인 성공시 메인페이지("/")로 이동
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    if (token) {
      // /signin으로 접속시, localStorage에 저장된 token이 있다면 Main페이지로 이동
      navigate('/');
    }
  }, [navigate]);

  return (
    <AdminForm title='로그인' onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type='email'
          name='email'
          placeholder='이메일을 입력하세요'
          onChange={handleInputs}
        />
        <Input
          type='password'
          name='password'
          placeholder='비밀번호를 입력하세요'
          onChange={handleInputs}
        />
      </InputWrapper>
      <BtnWrapper>
        <Button bgColor={active ? 'dodgerblue' : '#ddd'}>로그인</Button>
        <Link to='/signup'>
          <Button bgColor='black'>회원가입</Button>
        </Link>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div``;
const BtnWrapper = styled.div`
  margin-top: 20px;
`;
export default SignIn;
