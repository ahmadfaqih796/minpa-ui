import React from 'react';

const AuthPage = React.lazy(() => import('../modules/auth/auth.page'));

export const menuRoutes = [
  {
    path: '/login',
    element: <AuthPage />,
    protected: false,
  },
  
];
