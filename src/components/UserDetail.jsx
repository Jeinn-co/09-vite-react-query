import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const UserDetail = () => {
  const { userId } = useParams();
  const { data: user, isLoading, isError, error } = useUser(userId);

  if (!userId) return null;

  if (isLoading) return <div>Loading user...</div>;
  if (isError) return <div>Error fetching user: {error.message}</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
};

export default UserDetail; 