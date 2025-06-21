import { Routes, Route, Link } from 'react-router-dom';
import { UserList } from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>User Management</h1>
      <Routes>
        <Route path="/" element={<UserList />}>
          <Route path="user/:userId" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
