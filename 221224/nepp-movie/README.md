2022.12.24 수업내용

---

## 🎄TodoList 만들기 테스트

https://github.com/eklikeable/nepp-react-todolist

# 🎄React Router

url에 따라 컴포넌트를 선택적으로 렌더링 할 수 있다. 페이지 새로고침이 일어나지 않고 부분적으로만 렌더링이 일어나기 때문에 SPA(Single Page Application)을 개발 할 수 있다.

- react-router-dom ver.6
- 중첩라우팅
- Routes, Route path
- Link to : 페이지를 새로고침하지 않고 a href 태그처럼 hyper link를 연결
- Outlet : 중첩 라우팅에서 자식 Route의 위치를 잡아준다
- 파라미터 : ID또는 이름을 사용하여 특정 데이터를 조회할 때 사용
- 쿼리스트링 : 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의하며 &로 구분을 하는 형태
- useParams
- useNavigate : Link태그를 클릭하는 것 외에 url을 변경할 때 사용한다.

참고 블로그 : https://velog.io/@velopert/react-router-v6-tutorial

---

</br>

## 🎄설치방법

```
npm install react-router-dom
```

</br>

## 🎄BrowserRouter

React Router를 사용하고자 하는 컴포넌트를 BrowserRouter로 감싸야 한다.

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

</br>

## 🎄Routes, Route

라우팅을 할 때는 Routes안에 Route를 통해서 url에 따라 렌더링 될 컴포넌트를 작성한다.

```javascript
<Routes>
  <Route path="경로" element={<컴포넌트 />}>
</Routes>
```

</br>

## 🎄중첩 라우팅

라우팅된 컴포넌트 안에서 다시 라우팅을 할 수 있다.

```javascript
<Routes>
  <Route path='/hello/*' element={<Hello />}>
    <Route path='1' element={<div>1번 컴포넌트</div>} />
    <Route path='2' element={<div>2번 컴포넌트</div>} />
  </Route>
</Routes>
```

Route 안에 중첩해서 Route를 작성할 수 있다. 상위 라우팅된 컴포넌트에서 Outlet을 렌더링하면 된다.

```javascript
function Hello() {
  return (
    <div>
      <h1>Hello 컴포넌트</h1>
      <Outlet />
    </div>
  );
}
```

url이 **/hello** 인 경우에는 Outlet에 렌더링 되지 않고, **/hello/1** 이면 1번 컴포넌트, **/hello/2** 이면 2번 컴포넌트가 출력된다.

</br>

## 🎄useParams

url에서 파라미터를 받아올 수 있다.  
ex) /hello:id => id 라는 이름으로 파라미터를 받을 수 있다.

```javascript
<Routes>
  <Route path='/users' element={<UserList />} />
  <Route path='/users/:id' element={<Detail />} />
</Routes>
```

url이 정확하게 **/users**이면 UserList 컴포넌트가, 그 뒤에 다른 값이 오면 Datail 컴포넌트가 출력된다.

그리고 Detail 컴포넌트에서 파라미터(id)값을 useParams를 통해서 읽어올 수 있다. 파라미터의 이름은 path에 기입된 **:파라미터** 이름에 따라 달라진다. useParams의 리턴값은 객체이다.

</br>

## 🎄useSearchParams

쿼리 스트링을 간편하게 변환하여 사용할 수 있다. useSearchParams를 사용하면 객체를 리턴하는데, 그 객체의 get 메서드를 통해서 쿼리값들을 읽어올 수 있다. 쿼리값은 ?key=value&key2=value2... 의 형태로 전달된다. 파라미터보다 복잡하고 여러개의 값을 전달해야 할 때는 쿼리스트링을 사용한다.
무조건 문자열로 받아오므로, 숫자데이터가 필요한경우 parseInt를 해줘야 한다.

```javascript
function Detail() {
  const [searchParams] = useSearchParams();

  const email = searchParams.get('email');
  const age = searchParams.get('age');

  return (
    <div>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>
  );
}
```

<br />

## 🎄useNavigate

Link 컴포넌트가 아닌 다른 방법으로 url을 변경할 때 사용한다. useNavigate()의 반환값은 함수로, 인자로 url을 전달하면 변경된다. 주의사항으로 앞에 /가 붙었을 때와 안붙었을 때 다르게 동작한다. /를 붙이면 base url의 끝에 문자열을 부이지만, /를 생략하면 현재 url주소 끝에 붙인다.

```javascript
function Hello() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello 컴포넌트</h1>
      <p onClick={() => navigate('/users')}>유저목록 보기</p>
    </div>
  );
}
```
