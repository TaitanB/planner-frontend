import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from 'react-bootstrap';
import { Loader } from '../Loader/Loader';

const AppBar = lazy(() => import('../AppBar/AppBar'));

const Layout = () => {
  return (
    <Container className="d-flex flex-column py-5 mt-5 ">
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};

export default Layout;
