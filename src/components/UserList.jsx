import { Link, Outlet } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';

export const UserList = () => {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
