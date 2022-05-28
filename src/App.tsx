import { Routes, Route } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Protected from './pages/Protected';
import Users from './pages/Users';
import PrivateRoute from './routes/PrivateRoute';
import { PageId } from './types/types';

function App() {
  // const element = useRoutes(routeConfig);
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home title="home" />} />
        <Route element={<PrivateRoute />}>
          <Route path="/protected" element={<Protected />} />
          <Route path="/users" element={<Users />} />
        </Route>

        <Route
          path="/register"
          element={<AuthPage id={PageId.Register} title="Register" />}
        />
        <Route
          path="/login"
          element={<AuthPage id={PageId.Login} title="Login" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
