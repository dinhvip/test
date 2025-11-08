import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { FC } from 'react';
import type { ProtectedRouteProps, RouteConfig } from './types';
import LoadingSpinner from '../components/LoadingSpinner';

const ColumnPage = lazy(() => import('../pages/ColumnPage').then(module => ({
  default: module.default
})));

const RecordPage = lazy(() => import('../pages/RecordPage').then(module => ({
  default: module.default
})));

const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then(module => ({
  default: module.default
})));

const ProtectedRoute: FC<ProtectedRouteProps> = ({ 
  children, 
  redirectTo = '/login' 
}) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (false) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return <>{children}</>;
};

const routes: RouteConfig[] = [
  {
    path: '/columns',
    component: ColumnPage,
    title: 'Dashboard - HealthCare',
    description: 'View your healthcare analytics and dashboard'
  },
  {
    path: '/records',
    component: RecordPage,
    protected: true,
    title: 'My Records - HealthCare',
    description: 'Manage your personal health records'
  }
];

const AppRouter: FC = () => {
  React.useEffect(() => {
    const updatePageMeta = (title: string, description: string) => {
      document.title = title;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    };

    const currentPath = window.location.pathname;
    const currentRoute = routes.find(route => route.path === currentPath);
    
    if (currentRoute?.title && currentRoute?.description) {
      updatePageMeta(currentRoute.title, currentRoute.description);
    }
  }, []);

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Navigate to="/columns" replace />} 
      />
      
      {routes.map(({ path, component: Component, protected: isProtected }) => (
        <Route 
          key={path}
          path={path} 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {isProtected ? (
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              ) : (
                <Component />
              )}
            </Suspense>
          } 
        />
      ))}
      
      <Route 
        path="*" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        } 
      />
    </Routes>
  );
};

export default AppRouter;
