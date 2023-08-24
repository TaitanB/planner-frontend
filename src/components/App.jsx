import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../utils/PrivateRoute';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { LanguageProvider } from 'utils/LanguageContext';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';

import { Loader } from './Loader/Loader';

import './bootstrap.css';

import Layout from './Layout/Layout';
const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const TodosPage = lazy(() => import('../pages/Todos/Todos'));
const ProfilePage = lazy(() => import('../pages/Profile/Profile'));
const WheelOfLifePage = lazy(() => import('../pages/WheelOfLife/WheelOfLife'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
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
          />
          <Route
            path="/wheelOfLife"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<WheelOfLifePage />}
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
