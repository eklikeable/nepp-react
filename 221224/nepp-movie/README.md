2022.12.24 ์์๋ด์ฉ

---

## ๐TodoList ๋ง๋ค๊ธฐ ํ์คํธ

https://github.com/eklikeable/nepp-react-todolist

# ๐React Router

url์ ๋ฐ๋ผ ์ปดํฌ๋ํธ๋ฅผ ์ ํ์ ์ผ๋ก ๋ ๋๋ง ํ  ์ ์๋ค. ํ์ด์ง ์๋ก๊ณ ์นจ์ด ์ผ์ด๋์ง ์๊ณ  ๋ถ๋ถ์ ์ผ๋ก๋ง ๋ ๋๋ง์ด ์ผ์ด๋๊ธฐ ๋๋ฌธ์ SPA(Single Page Application)์ ๊ฐ๋ฐ ํ  ์ ์๋ค.

- react-router-dom ver.6
- ์ค์ฒฉ๋ผ์ฐํ
- Routes, Route path
- Link to : ํ์ด์ง๋ฅผ ์๋ก๊ณ ์นจํ์ง ์๊ณ  a href ํ๊ทธ์ฒ๋ผ hyper link๋ฅผ ์ฐ๊ฒฐ
- Outlet : ์ค์ฒฉ ๋ผ์ฐํ์์ ์์ Route์ ์์น๋ฅผ ์ก์์ค๋ค
- ํ๋ผ๋ฏธํฐ : ID๋๋ ์ด๋ฆ์ ์ฌ์ฉํ์ฌ ํน์  ๋ฐ์ดํฐ๋ฅผ ์กฐํํ  ๋ ์ฌ์ฉ
- ์ฟผ๋ฆฌ์คํธ๋ง : ์ฃผ์์ ๋ท๋ถ๋ถ์ ? ๋ฌธ์์ด ์ดํ์ key=value ๋ก ๊ฐ์ ์ ์ํ๋ฉฐ &๋ก ๊ตฌ๋ถ์ ํ๋ ํํ
- useParams
- useNavigate : Linkํ๊ทธ๋ฅผ ํด๋ฆญํ๋ ๊ฒ ์ธ์ url์ ๋ณ๊ฒฝํ  ๋ ์ฌ์ฉํ๋ค.

์ฐธ๊ณ  ๋ธ๋ก๊ทธ : https://velog.io/@velopert/react-router-v6-tutorial

---

</br>

## ๐์ค์น๋ฐฉ๋ฒ

```
npm install react-router-dom
```

</br>

## ๐BrowserRouter

React Router๋ฅผ ์ฌ์ฉํ๊ณ ์ ํ๋ ์ปดํฌ๋ํธ๋ฅผ BrowserRouter๋ก ๊ฐ์ธ์ผ ํ๋ค.

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

</br>

## ๐Routes, Route

๋ผ์ฐํ์ ํ  ๋๋ Routes์์ Route๋ฅผ ํตํด์ url์ ๋ฐ๋ผ ๋ ๋๋ง ๋  ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ๋ค.

```javascript
<Routes>
  <Route path="๊ฒฝ๋ก" element={<์ปดํฌ๋ํธ />}>
</Routes>
```

</br>

## ๐์ค์ฒฉ ๋ผ์ฐํ

๋ผ์ฐํ๋ ์ปดํฌ๋ํธ ์์์ ๋ค์ ๋ผ์ฐํ์ ํ  ์ ์๋ค.

```javascript
<Routes>
  <Route path='/hello/*' element={<Hello />}>
    <Route path='1' element={<div>1๋ฒ ์ปดํฌ๋ํธ</div>} />
    <Route path='2' element={<div>2๋ฒ ์ปดํฌ๋ํธ</div>} />
  </Route>
</Routes>
```

Route ์์ ์ค์ฒฉํด์ Route๋ฅผ ์์ฑํ  ์ ์๋ค. ์์ ๋ผ์ฐํ๋ ์ปดํฌ๋ํธ์์ Outlet์ ๋ ๋๋งํ๋ฉด ๋๋ค.

```javascript
function Hello() {
  return (
    <div>
      <h1>Hello ์ปดํฌ๋ํธ</h1>
      <Outlet />
    </div>
  );
}
```

url์ด **/hello** ์ธ ๊ฒฝ์ฐ์๋ Outlet์ ๋ ๋๋ง ๋์ง ์๊ณ , **/hello/1** ์ด๋ฉด 1๋ฒ ์ปดํฌ๋ํธ, **/hello/2** ์ด๋ฉด 2๋ฒ ์ปดํฌ๋ํธ๊ฐ ์ถ๋ ฅ๋๋ค.

</br>

## ๐useParams

url์์ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ฐ์์ฌ ์ ์๋ค.  
ex) /hello:id => id ๋ผ๋ ์ด๋ฆ์ผ๋ก ํ๋ผ๋ฏธํฐ๋ฅผ ๋ฐ์ ์ ์๋ค.

```javascript
<Routes>
  <Route path='/users' element={<UserList />} />
  <Route path='/users/:id' element={<Detail />} />
</Routes>
```

url์ด ์ ํํ๊ฒ **/users**์ด๋ฉด UserList ์ปดํฌ๋ํธ๊ฐ, ๊ทธ ๋ค์ ๋ค๋ฅธ ๊ฐ์ด ์ค๋ฉด Datail ์ปดํฌ๋ํธ๊ฐ ์ถ๋ ฅ๋๋ค.

๊ทธ๋ฆฌ๊ณ  Detail ์ปดํฌ๋ํธ์์ ํ๋ผ๋ฏธํฐ(id)๊ฐ์ useParams๋ฅผ ํตํด์ ์ฝ์ด์ฌ ์ ์๋ค. ํ๋ผ๋ฏธํฐ์ ์ด๋ฆ์ path์ ๊ธฐ์๋ **:ํ๋ผ๋ฏธํฐ** ์ด๋ฆ์ ๋ฐ๋ผ ๋ฌ๋ผ์ง๋ค. useParams์ ๋ฆฌํด๊ฐ์ ๊ฐ์ฒด์ด๋ค.

</br>

## ๐useSearchParams

์ฟผ๋ฆฌ ์คํธ๋ง์ ๊ฐํธํ๊ฒ ๋ณํํ์ฌ ์ฌ์ฉํ  ์ ์๋ค. useSearchParams๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฐ์ฒด๋ฅผ ๋ฆฌํดํ๋๋ฐ, ๊ทธ ๊ฐ์ฒด์ get ๋ฉ์๋๋ฅผ ํตํด์ ์ฟผ๋ฆฌ๊ฐ๋ค์ ์ฝ์ด์ฌ ์ ์๋ค. ์ฟผ๋ฆฌ๊ฐ์ ?key=value&key2=value2... ์ ํํ๋ก ์ ๋ฌ๋๋ค. ํ๋ผ๋ฏธํฐ๋ณด๋ค ๋ณต์กํ๊ณ  ์ฌ๋ฌ๊ฐ์ ๊ฐ์ ์ ๋ฌํด์ผ ํ  ๋๋ ์ฟผ๋ฆฌ์คํธ๋ง์ ์ฌ์ฉํ๋ค.
๋ฌด์กฐ๊ฑด ๋ฌธ์์ด๋ก ๋ฐ์์ค๋ฏ๋ก, ์ซ์๋ฐ์ดํฐ๊ฐ ํ์ํ๊ฒฝ์ฐ parseInt๋ฅผ ํด์ค์ผ ํ๋ค.

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

## ๐useNavigate

Link ์ปดํฌ๋ํธ๊ฐ ์๋ ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก url์ ๋ณ๊ฒฝํ  ๋ ์ฌ์ฉํ๋ค. useNavigate()์ ๋ฐํ๊ฐ์ ํจ์๋ก, ์ธ์๋ก url์ ์ ๋ฌํ๋ฉด ๋ณ๊ฒฝ๋๋ค. ์ฃผ์์ฌํญ์ผ๋ก ์์ /๊ฐ ๋ถ์์ ๋์ ์๋ถ์์ ๋ ๋ค๋ฅด๊ฒ ๋์ํ๋ค. /๋ฅผ ๋ถ์ด๋ฉด base url์ ๋์ ๋ฌธ์์ด์ ๋ถ์ด์ง๋ง, /๋ฅผ ์๋ตํ๋ฉด ํ์ฌ url์ฃผ์ ๋์ ๋ถ์ธ๋ค.

```javascript
function Hello() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello ์ปดํฌ๋ํธ</h1>
      <p onClick={() => navigate('/users')}>์ ์ ๋ชฉ๋ก ๋ณด๊ธฐ</p>
    </div>
  );
}
```

<br/>

## 22.12.31(ํ ) ์์ ๋ด์ฉ

<br/>

**API** : Aplication Programming Interface
์ดํ๋ฆฌ์ผ์ด์ ๊ฐ์ ํต์  ๋ฐฉ๋ฒ

**REST API** : Representational State Transfer API์ ์ฝ์. ์์์ ์ํ๋ฅผ ์์์ ๋ํ ํํ์ผ๋ก ์ฃผ๊ณ  ๋ฐ๋ ๋ชจ๋  ๊ฒ
์์(Resource), ๋ฉ์๋, ํํ(Representation)

ex) Get https://www.api-com/todos  
ex) Get https://www.api-com/todos/1  
์์ฒญ๊ฐ๋ง ๊ฐ์ง๊ณ  ์ด๋ค ๋ฐ์ดํฐ๋ฅผ ์์ฒญํ๋์ง ์์ธก ๊ฐ๋ฅ  
[todos]๋ถ๋ถ์ ๋ณดํต ๋ช์ฌ๋ก ์์ฑ

**๋ฉ์๋์ ์ข๋ฅ** : GET, POST, PUT(์ ์ฒด), PATCH(์ผ๋ถ๋ถ), DELETE

---

**json-server** : json ํ์ผ์ ์ ์ฅ๋ ์ ๋ณด๋ฅผ ์ฃผ๊ณ ๋ฐ๋ ๊ฐ์์ REST API๋ฅผ ๋ง๋ค์ด ์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ.

```
/* ์ค์น */
npm install -g json-server

/* json server ์คํ */
json-server ํ์ผ๊ฒฝ๋ก --port ํฌํธ๋ฒํธ
json-server ./db.json --port 4000
```

ํ๋ฉด์ ๋ฐ์ดํฐ๋ฅผ ๋์๋ณด๊ณ  ์ถ์๋ฐ, ๋ฐฑ์ค๋๊ฐ ์์ง ์ค๋น๊ฐ ์๋์ ๋ ์ฌ์ฉ
