import React from 'react';

export const UserCard = ({ user }) => {
  return (
    <div style={{ background: '#f5f5f5', padding: 16, borderRadius: 8 }}>
      <p><strong>姓名：</strong>{user.name}</p>
      <p><strong>Email：</strong>{user.email}</p>
      <p><strong>電話：</strong>{user.phone}</p>
      <p><strong>公司：</strong>{user.company?.name}</p>
    </div>
  );
};
