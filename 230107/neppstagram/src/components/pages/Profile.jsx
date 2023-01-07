import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCurrentUser, patchProfile } from '../../api/admin';

function Profile() {
  const [user, setUser] = useState({});

  /* 
  const [files, setFiles] = useState({});

  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
  setFiles(e.target.files);
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]); // url로 읽을 수 있게 변환하는 과정
  reader.onload = () => {
    setPreview(reader.result);
  };
};
*/

  const handleChange = (e) => {
    const form = new FormData();

    form.append('image', e.target.files[0]);

    patchProfile(form).then((res) => console.log(res));
  };

  useEffect(() => {
    getCurrentUser().then((res) => setUser(res.data.data));
  }, []);

  const { name, profile_url } = user;

  return (
    <Container>
      <Wrapper>
        <UserName>{name}</UserName>
        <ProfileCircle htmlFor='profile'>
          <img src={profile_url} alt='' />
        </ProfileCircle>
        <input
          type='file'
          id='profile'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleChange}
        />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.h2``;

const ProfileCircle = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;

  margin-top: 30px;

  border: 3px solid #eee;
  border-radius: 50%;

  overflow: hidden;

  img {
    width: 300px;
  }
`;
export default Profile;
