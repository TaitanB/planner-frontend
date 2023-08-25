import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from 'react-bootstrap';
import { Loader } from '../Loader/Loader';

const AppBar = lazy(() => import('../AppBar/AppBar'));

const Layout = () => {
  return (
    <Container className="d-flex flex-column min-vh-100">
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};

export default Layout;
