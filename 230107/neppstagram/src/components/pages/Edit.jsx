import styled from 'styled-components';
import { RxPlus } from 'react-icons/rx';
import { useState } from 'react';
import { Button } from '../common/button';

function Edit() {
  const [inputs, setInputs] = useState({
    content: '',
    images: [],
  });

  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImages = (e) => {
    if (inputs.images.length + e.target.files.length > 5) {
      window.alert('사진은 5개 이하로 등록해 주세요');
      return;
    }
    setInputs((inputs) => {
      const prevImages = inputs.images;
      const { files } = e.target;

      setPreviewUrls([]);

      const fileArr = [...prevImages, ...files];

      fileArr.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setPreviewUrls((urls) => [...urls, reader.result]);
        };
      });

      return {
        ...inputs,
        images: [...prevImages, ...files],
      };
    });
  };

  const handleSubmit = () => {
    const form = new FormData();
    form.append('content', inputs.content);

    inputs.images.forEach((image) => {
      form.append('images', image);
    });
    return;
  };

  return (
    <Container>
      <Textarea
        placeholder='글을 입력해주세요'
        onChange={(e) =>
          setInputs((inputs) => ({ ...inputs, content: e.target.value }))
        }
      />
      <ImagesWrapper>
        {previewUrls.map((url, idx) => (
          <Preview url={url} key={idx} />
        ))}
        <BtnInput htmlFor='postImages'>
          <RxPlus color='#eee' size={40} />
        </BtnInput>
        <input
          type='file'
          accept='image/*'
          multiple
          style={{ display: 'none' }}
          id='postImages'
          onChange={handleImages}
        />
      </ImagesWrapper>
      <Button style={{}} onClick={handleSubmit}>
        등록
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;

  outline: none;
  resize: none;
  border: 1px solid #eee;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BtnInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  cursor: pointer;
  border: 2px solid #eee;
`;

function Preview({ url }) {
  return (
    <PreviewBox>
      <img src={url} alt='' />
    </PreviewBox>
  );
}

const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  overflow: hidden;

  img {
    width: 100px;
    height: 100px;
  }

  & + & {
    margin-left: 3px;
  }
`;

export default Edit;
