import React from 'react'
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';
import { menuRoutes } from './menuRoute';

const AppRoute = () => {
  return (
   <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {menuRoutes.map(({ path, element, protected: isProtected }) => (
              <Route
                key={path}
                path={path}
                element={isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
  )
}

export default AppRoute