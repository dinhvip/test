import type { FC, ReactNode } from 'react';

export interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<FC<any>>;
  protected?: boolean;
  title?: string;
  description?: string;
}
