import React, { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div className="wrapper">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};