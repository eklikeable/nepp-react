import { useState } from 'react';
import styled from 'styled-components';
import { useUserId } from '../../data/auth';
import CommentList from '../common/CommentList';
import PostImageBox from '../common/PostImageBox';
import UserInfo from '../common/UserInfo';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const { author, img_list, content, id } = post;
  const [showComment, setShowComment] = useState(false);

  const userId = useUserId();

  return (
    <Container>
      <UserInfo user={author} />
      <PostImageBox img_list={img_list} />
      <div style={{ textAlign: 'right', fontSize: '0.5rem', marginTop: 10 }}>
        {author.id === userId && <Link to={`edit/${id}`}>수정하기</Link>}
      </div>
      <ContentBox>
        <p>{content}</p>
        <BtnComment onClick={() => setShowComment(!showComment)}>
          {showComment ? '댓글숨기기' : '댓글보기'}
        </BtnComment>
      </ContentBox>
      {showComment && <CommentList postId={id} />}
    </Container>
  );
}

export default Post;

const Container = styled.div`
  width: 100%;
  & + & {
    border-top: 1px solid #eee;
  }
`;

const ContentBox = styled.div`
  padding: 5px;
  font-size: 0.8rem;
`;

const BtnComment = styled.div`
  margin-top: 10px;
  font-size: 0.7rem;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
`;
