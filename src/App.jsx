import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserActions } from './components/UserActions';
import { UserList } from './components/UserList';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>🚀 React Query 測試</h1>
      <UserActions />
      <UserList />
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
