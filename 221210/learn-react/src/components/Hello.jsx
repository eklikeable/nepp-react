// 컴포넌트 만들기
// 함수 이름은 파스칼 케이스로, 컴포넌트 이름과 동일하게 작성
// 컴포넌트의 장점 : 간편하게 재사용 가능

function Hello({ text, active }) {
  return <h1>Hello, {text}!</h1>;
}

Hello.defaultProps = {
  text: "react",
  color: "black",
};
export default Hello;
