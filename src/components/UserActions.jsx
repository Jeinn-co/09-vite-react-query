import React from 'react';
import { useUser } from '../hooks/useUser';
import { useQueryClient } from '@tanstack/react-query';
import { UserCard } from './UserCard';

export const UserActions = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error, refetch } = useUser();
  // const { data, isLoading, isError, error, refetch } = useUser({ userId: 1 });

  const handleInvalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['user', 1] });
  };

  return (
    <div>
      <div style={{ margin: '12px 0' }}>
        <button onClick={() => refetch()} style={{ marginRight: 8 }}>
          1. 重抓（Refetch）
        </button>
        <button onClick={handleInvalidate}>2. 無效化（Invalidate）</button>
      </div>

      {isLoading && <p>載入中...</p>}
      {isError && <p style={{ color: 'red' }}>錯誤：{error.message}</p>}
      {data && <UserCard user={data} />}
    </div>
  );
};
