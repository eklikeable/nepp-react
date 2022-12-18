import './App.css';
import { createGlobalStyle } from 'styled-components';
import Slider from './components/Slider';

const GlobalStyle = createGlobalStyle`
* { 
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}

// 브라우저 별 스크롤바 없애는 스타일 코드
body{
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Slider />
    </div>
  );
}

export default App;
