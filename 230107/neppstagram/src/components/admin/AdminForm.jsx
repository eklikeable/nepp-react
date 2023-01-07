import styled from 'styled-components';

function AdminForm({ title, children, onSubmit }) {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Title>{title}</Title>
        {children}
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Form = styled.form`
  padding: 0 20px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 50px;
`;

export default AdminForm;
