//import와 export
//확장자 .mjs 는 모듈 파일

export const PI = 3.141592;

export function getSum(a, b) {
  return a + b;
}

let obj = {
  PI,
  getSum,
};
export default obj; // import 할 때 {}로 감싸지 않은 것. 모듈당 1개만 default 지정 가능
