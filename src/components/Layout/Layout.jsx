import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
const AppBar = lazy(() => import('../AppBar/AppBar'));

const Layout = () => {
  return (
    <Container className="px-4">
      <div className="d-flex flex-column min-vh-100">
        <Suspense fallback={<Loader />}>
          <AppBar />
          <Outlet />
        </Suspense>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Container>
  );
};

export default Layout;
