import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Toaster } from 'react-hot-toast';


export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
