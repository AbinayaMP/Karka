import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Select a user:</p>
      <ul>
        <li><Link to="/user/101">Userss 101</Link></li>
        <li><Link to="/user/102">User 102</Link></li>
      </ul>
    </div>
  );
}

export default Home;