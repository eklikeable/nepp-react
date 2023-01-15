import { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import { client } from '../..';
import { deleteComment, getComments, postComments } from '../../api/admin';
import { useUserId } from '../../data/auth';

function CommentList({ postId }) {
  const [commentPage, setCommentPage] = useState(1);
  const [commentsList, setCommentsList] = useState([]);
  const [input, setInput] = useState('');

  const currentUserId = useUserId();

  /* ✨아래 코드는 react-query로 대체됨

  const getData = useCallback(() => {
    getComments(postId, commentPage).then((data) =>
    setCommentsList((commentList) => [...commentList, ...data])
    );
  }, [postId, commentPage]);

  const handleCommentSubmit = async () => {
    if (input.length === 0) {
      alert('댓글을 입력해주세요');
      return;
    }
    const result = await postComments({ postId, content: input });
    setCommentsList([result, ...commentsList]);
    setInput('');
  };

  useEffect(() => {
  getData();
}, [getData]);
  */

  // 댓글 등록하는 함수 만들기
  const commentsMutation = useMutation('comments', postComments, {
    onSuccess: (data) => client.fetchQuery('comments'),
  });
  const handleSubmit = () => {
    commentsMutation.mutate({ postId, content: input });
  };

  const { data, isLoading, error } = useQuery(
    'comments',
    () => getComments(postId, commentPage),
    {
      // onSuccess: (data) => console.log(data),
    }
  );

  // 댓글 삭제하는 함수 만들기
  const commentDeleteMutation = useMutation(deleteComment, {
    onSuccess: (data) => {
      console.log('댓글삭제', data);
      client.invalidateQueries('comments');
    },
  });

  const handleDelete = async (commentId) => {
    if (!window.confirm('댓글을 삭제하시겠습니까?')) return;

    commentDeleteMutation.mutate(commentId);

    /*
    await deleteComment(commentId);
    setCommentsList(commentsList.filter((comment) => comment.id !== commentId));
    */
  };

  // 댓글 더보기
  const handlePage = () => {
    setCommentPage(commentPage + 1);
  };

  /*

*/

  if (isLoading) return <div>Loading....</div>;

  return (
    <Container>
      <InputBox>
        <InputComment
          placeholder='댓글을 입력해주세요'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BtnSubmit onClick={handleSubmit}>등록</BtnSubmit>
      </InputBox>
      {commentsList &&
        data.map((comment) => (
          <CommentItem key={comment.id}>
            {comment.content}
            {currentUserId === comment.author.id && (
              <BtnDelete onClick={() => handleDelete(comment.id)}>
                댓글삭제
              </BtnDelete>
            )}
          </CommentItem>
        ))}
      <BtnMore onClick={handlePage}>댓글더보기</BtnMore>
    </Container>
  );
}

export default CommentList;

const Container = styled.div``;

const CommentItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 0.8rem;
  margin-left: 5px;
`;

const InputBox = styled.div`
  display: flex;
`;

const InputComment = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid #eee;
  font-size: 0.8rem;
`;

const BtnSubmit = styled.div`
  font-size: 0.8rem;
  text-align: center;
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;
  user-select: none;
`;

const BtnDelete = styled(BtnSubmit)`
  font-size: 0.5rem;
  padding: 3px 3px;
  border-radius: 7px;
  background-color: rgba(156, 156, 156, 0.2);
  &:hover {
    background-color: tomato;
  }
`;

const BtnMore = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  user-select: none;
`;
