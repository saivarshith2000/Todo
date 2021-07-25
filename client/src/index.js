import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

const client = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ColorModeScript />
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);
