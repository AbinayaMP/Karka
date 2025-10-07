import { useParams } from 'react-router-dom';

function User() {
  const params = useParams();

  const { userId } = params;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID from URL: {userId}</p>
    </div>
  );
}

export default User;