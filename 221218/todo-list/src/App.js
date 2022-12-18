import { darken, lighten } from 'polished';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Todos from './components/Todos';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
text-decoration: none;
color: inherit;
}
`;

const theme = {
  colors: {
    main: 'dodgerblue',
    disabled: '#ddd',
    hover: lighten(0.05, 'dodgerblue'),
    active: darken(0.05, 'dodgerblue'),
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Block>
        <GlobalStyle />
        <Todos />
      </Block>
    </ThemeProvider>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #f2f2f2;
`;

export default App;
