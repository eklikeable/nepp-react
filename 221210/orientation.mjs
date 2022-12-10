import math, { getSum, PI } from "./lib.mjs";

// 최신문법의 기준 ES6(2015)

/* 
1. var 변수선언의 문제점 
  1) 중복 선언이 가능하다. => 의도치 않게 값이 변경될 수 있어서 예상치 못한 오류가 발생한다.
  2) 변수 호이스팅이 발생한다. => 변수 선언 이전에 참조가 된다.
  3) 블록 레벨 스코프(유효 범위)를 지원하지 않는다.
*/

var num = 10;
console.log(num);
var num = 20;

function sum(a) {
  var num = 0;
  num = num + a;
  return num;
}

console.log(sum(10));
console.log(num);

if (true) {
  // 선언 이전에 참조 불가능 => 엄밀히 말하면 호이스팅 자체는 일어난다 (TDZ 문제)
  var num = 100;
  console.log(num);
}
console.log(num);
//console.log(num03) : 볼록레벨 스코프를 지원하기 때문에 전역 변수가 생성되지 않는다.

const TAX = 10; // Constant(상수) => 값을 무조건 초기화시켜야 한다.
// Tax = 100; ❌ 상수 이기 때문에 재할당 불가능

/*
2. 템플릿 리터럴 : ``(백틱) ${표현식}을 통해 문자열 안에 표현식을 포함 시킬 수 있다.
*/
console.log("세율이 " + TAX + "% 입니다");
console.log(`세율이 ${TAX}% 입니다`);

/* 
3. 화살표 함수(Arrow function)
  1) 표현이 간결하기 때문에 주로 콜백함수로 전달할 때 주로 사용한다.
  2) 코드블록을 생략하면 return 생략 가능
  3) this 바인딩이 되지 않는다.
*/

const divide = (a, b) => {
  return a / b;
};
console.log(`10 / 2 = ${divide(10, 2)}`); // 10 / 2 = 5

setTimeout(() => {
  console.log("2초 경과");
}, 2000);

// 객체도 {} 를 사용하기 때문에, ()안에 사용해야 객체로 인식된다.
const getObj = (name, age) => ({
  name,
  age,
});

let user = {
  name: "seok",
  age: 30,
  hello: function () {
    // function을 지우고 화살표 함수로 작성 할 경우 console에 undefined가 출력된다
    console.log(this.name, this.age); // seok 30
  },
};
user.hello();

/* 
4. 비구조화 할당 (destructuring)
    : 객체나 배열의 값을 간결하게 할당할 수 있다.
    1) 객체는 변수 선언을 {} 안에 해주면 된다. => 객체의 키값과 동일하게 작성해야 한다.
    2) 배열은 []안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당된다.
       => 배열 비구조화 할당은 객체 비구조할당에 비해 변수명을 자유롭게 지을 수 있다. 키값 또한 알 필요가 없다.
*/

// let name = user.name;
// let age = user.age;
let { name: userName, age } = user; // name: userName 이런식으로 변수명 변경 가능

let arr = ["seok", 30, "apple", function () {}];
let [name02, age02, fruit, func] = arr;
console.log(name02, func);

/* 
5. 펼침(spread) 연산자
  1) 배열이나 객체의 값들을 나열하는 효과가 있다
  2) 복사할 경우 참조값 복사가 아닌 값 자체가 복사되기 때문에, 불변성을 지킬 수 있다.
   => 객체가 중첩되는 경우 중첩된 객체는 참조복사가 일어난다.
*/

let copyUser = user;
copyUser.age = 31;
// 객체를 새로 할당하면 주소(참조값)만 복사되기 때문에, 원본값이 변경 된다.
console.log(user);
console.log(user === copyUser); // true

let copyUser2 = { ...user }; // spread연산자를 사용하여 값 자체를 복사
copyUser2.age = 18;
console.log(user);
console.log(copyUser2);
console.log(user === copyUser2); // false

let numArr = [1, 2, 10, 5, 7];
let max = Math.max(...numArr);
console.log("max : ", max);
console.log(numArr); // [ 1, 2, 10, 5, 7 ]
console.log(...numArr); // 1 2 10 5 7

/* 
6. import와 export
  1) 확장자 .mjs (모듈파일) 이여야 한다.
  2) export 되는 값들은 사용하고자 하는 mjs파일에서 [import { 불러올 이름 } from "경로"] 형태로 사용
     { 불러올이름 as 바꿀이름 } : 이렇게 식별자 이름 변경 가능
  3) export default는 하나만 가능하다. [import 식별자 from "경로"] => 식별자 이름을 자유롭게 지정 가능
  4) 모듈은 별개의 유효범위를 가지게 되기 때문에 캡슐화를 할 수 있다.
*/

console.log(getSum(10, 5)); // 15
console.log(PI);

console.log(math.getSum(2, 3)); // 5
console.log(math.PI);

/* 
7. Promise 
   Promise는 비동기 처리를 도와주는 객체 => 서버에서 데이터를 받아올 때.
  생성자의 인자로 함수를 전달한다 => 그 함수에 2개의 함수가 전달된다.
  resolve : 성공했을 때 실행 할 함수. 
    => resolve값을 Promise.prototype.then의 콜백함수의 첫번째 인자로 전달된다
  reject : 실패했을 때 실행 할 함수. 에러 발생시 에러객체를 나타내는 error와 함께 호출.
    => Promise.prototype.catch(콜백함수)의 콜백함수의 첫번째 인자로 에러가 전달된다.
*/

let promise = new Promise(function (resolve, reject) {
  resolve(1);
});

promise.then(function (res) {
  console.log(res); // resolve에 담아보낸 1이 출력된다
});

let promise2 = new Promise(function (resolve, reject) {
  reject("에러 발생!");
});
promise2.catch(function (err) {
  console.log(err); // 에러 발생!
});

//메소드 체이닝으로 연결 가능
promise
  .then(function (res) {
    console.log(res); // 성공했을경우 실행
  })
  .catch(function (err) {
    console.log(err); // 실패을경우 실행
  });

function getData(str) {
  return new Promise(function (resolve, reject) {
    resolve(str);
  });
}
// getData가 Promise 객체를 리턴하므로, 바로 .then사용가능
getData("자바스크립트").then(function () {});

function getId(id) {
  return new Promise(function (resolve) {
    resolve(id);
  });
}

// Promise를 중첩해서 사용 가능하지만 복잡해진다
getData("자바스크립트")
  .then(function () {
    return getId(1);
  })
  .then(function (res) {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* 
  이것을 좀 더 쉽게 도와주는 async, await : 반드시 세트로 사용된다
  - 함수 앞에 async를 붙여준다
  - await을 앞에 붙이면 resolve 될 때 까지 다음코드를 실행하지 않는다
  (원래 setTimeout를 기다리지 않고 다음 코드들이 바로 실행되는데, 
    Promise객체에 setTimeout을 담으면 resolve가 완료될때까지 다음코드를 실행하지 않는다)
    => 비동기 코드를 동기처럼 순서를 제어하기 쉽다.
  - try/catch문을 통해 에러를 처리할 수 있다.
  - 서로 연관없는 데이터를 받아온다면 Promise.all 등을 통해 병렬적으로 처리할 수 있다(배열로 반환)
  * 자바스크립트에서 서버에서 무언가를 받아와야 한다 => Promise를 사용한다고 보면 됨
  * async가 붙은 함수 안에서 await를 붙이면 데이터를 받아올때까지 기다려 준다.
  - async함수는 return값을 resolve하는 promise를 반환한다. (return값을 지정해도, promise를 반환)
*/
async function fetchData() {
  try {
    // let data = await getData("JS");
    // let id = await getId(101);
    // console.log(`async test - data : ${data}, id : ${id}`);
    let result = await Promise.all([getData("JS"), getId(101)]);
    console.log("207번째 줄 Promise.all 테스트", result);
  } catch (err) {
    console.log(err);
  }
  return 1;
}
console.log("212줄 ", fetchData());

/* 
삼항연산자 : 조건식 ? 참일경우 리턴할 것 : 거짓일경우 리턴 할 것
단축평가 : &&앞의 식이 truthy면 뒷 식을 할당, &&값이 falshy라면 false반환
*/
let num4 = 5;
let color = num4 < 10 && "red";
console.log("단축평가 color : ", color);

// || 은 &&와 반대로, 앞이 truthy면 뒷 항은 실행되지 않고, 앞이 falsy면 뒤가 실행됨
let str = "가나다라" || "abcd";
console.log(str);

/* 
?? : nullish 병합 연산자 - null 이나 undefined만 체크한다
https://ko.javascript.info/nullish-coalescing-operator
  값이 없는경우 무엇을 띄울건지 설정할 경우 주로 사용
  앞 항이 null이나 undefined면 뒷 항 실행.
  앞 항이 null이나 undefined가 아니면 앞 항 실행.
*/
let isNull = "앞항출력!" ?? "뒷항출력!";
let isNull2 = user.height ?? "뒷항출력!";
console.log("nullish 병합연산자 : ", isNull);
console.log("nullish 병합연산자 : ", isNull2);

// console.log(undefined.age); // Cannot read properties of undefined 에러 발생
/* 
옵셔널체이닝 : 참조한 객체의 값이 null이거나 undefined인 경우 뒤의 프로퍼티를 평가하지 않는다.
    => ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
https://ko.javascript.info/optional-chaining
*/

console.log(undefined?.age);

/* 
배열의 고차 함수 
*/
let userList = [
  { id: 1, name: "seok", age: 30 },
  { id: 2, name: "hwangbo", age: 32 },
  { id: 3, name: "minsu", age: 43 },
  { id: 4, name: "minseok", age: 26 },
];

// Array.prototype.forEach() : 배열을 순회하며 각 값을 인자로, 함수를 반복 실행한다.
userList.forEach((user) => {
  console.log(user);
});

// Array.prototype.filter() : 배열을 순회하며 각 값을 조건식에 따라 해당하는 요소만 배열로 반환
// => 콜백함수의 return값이 true인 요소만 모아서 반환. 원본배열을 변경시키지 않음!
const filteredUserList = userList.filter((user) => user.age > 30);
console.log(filteredUserList);

// id값을 사용하지 않고 짝수번째 요소만 출력해보자 => index사용
const evenUserList = userList.filter((_, idx) => (idx + 1) % 2 === 0);
console.log(evenUserList);

// Array.prototype.map() : 배열을 순회하며 각 요소에 변형을 줄 때 사용
// => 매 반복마다의 return 값을 새로운 배열로 모아서 반환한다. 기존배열은 변경되지 않음!
let mapArr = userList.map((user) => {
  return user.age;
});
console.log(mapArr);

// age가 30 이상인 user의 name 프로퍼티만 배열로 모아서 반환해보자
let moreThanthirty = userList.map((user) => {
  return user.name;
});
console.log("user 이름 목록 : ", moreThanthirty);

// 메소드 체이닝
let nameArr = userList
  .filter((user) => user.age >= 30)
  .map((user) => user.name);
console.log("나이가 30 이상인 유저 : ", nameArr);

// Array.prototype.reduce() : 배열을 순회하며 누산을 할 때 사용된다.
let totalAge = userList.map((user) => user.age).reduce((acc, cur) => acc + cur);
console.log(`user 나이 합계 : ${totalAge}`);

/* 
REST 문법 : 매개변수에 ...을 붙이면 전달된 인자가 몇 개 이건 배열로 모아준다.
          => 무조건 매개변수의 마지막에 사용해야 한다.
*/

function getTotal(...numList) {
  return numList.reduce((acc, cur) => acc + cur);
}
console.log(getTotal(1, 2, 3)); // 6
console.log(getTotal(1, 2, 3, 4, 5)); // 15
