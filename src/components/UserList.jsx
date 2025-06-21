import React from 'react';
import { useUsers } from '../hooks/useUsers';

export const UserList = () => {
  const { data, isLoading, isError, error } = useUsers();

  if (isLoading) return <p>載入使用者清單中...</p>;
  if (isError) return <p style={{ color: 'red' }}>錯誤：{error.message}</p>;

  return (
    <div style={{ marginTop: 32 }}>
      <h2>使用者清單</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};
