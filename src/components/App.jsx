import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../utils/PrivateRoute';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { LanguageProvider } from 'utils/LanguageContext';
import { current } from 'redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader/Loader';

import './bootstrap.css';

import Layout from './Layout/Layout';
const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const TodosPage = lazy(() => import('../pages/Todos/Todos'));
const ProfilePage = lazy(() => import('../pages/Profile/Profile'));
const StatisticsPage = lazy(() => import('../pages/Statistics/Statistics'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));
const AllTodos = lazy(() => import('../components/AllTodos/AllTodos'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isRefreshing ? (
    <div className="d-flex">
      <Loader />
    </div>
  ) : (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/todos"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/todos" component={<LoginPage />} />
            }
          />
          <Route
            path="/todos"
            element={
              <PrivateRoute redirectTo="/login" component={<TodosPage />} />
            }
          >
            <Route index element={<AllTodos />} />
          </Route>
          <Route
            path="/statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<StatisticsPage />}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
};
