import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import NewsAnalytics from './Pages/NewsAnalytics';
import BlogList from './Pages/BlogList';

function App() {
  const { user } = useSelector(state => state.auth);

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Login />} />
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} /> */}
        {user && <Route path="/analytics" element={<NewsAnalytics />} />}
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
