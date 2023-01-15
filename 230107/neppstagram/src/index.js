import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './data/auth';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const client = new QueryClient();

root.render(
  <Router>
    <ContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </ContextProvider>
  </Router>
);
