import { useEffect, useState } from 'react';
import type { FC } from 'react';
import MainLayout from './layouts/MainLayout';
import AppRouter from './routes/AppRouter';
import LoadingSpinner from './components/LoadingSpinner';
import type { MainLayoutProps } from './layouts/MainLayout';

interface AppState {
  isLoading: boolean;
}

interface AppProps {
  layoutProps?: Partial<MainLayoutProps>;
}

const App: FC<AppProps> = ({ layoutProps = {} }) => {
  const [state, setState] = useState<AppState>({
    isLoading: true
  });

  useEffect(() => {
  const timer = setTimeout(() => {
    setState(prev => ({ ...prev, isLoading: false }));
  }, 300);
  return () => clearTimeout(timer);
}, []);

  if (state.isLoading) {
    return <LoadingSpinner />;
  }

  const defaultLayoutProps: Partial<MainLayoutProps> = {
    title: 'HealthCare Dashboard',
    description: 'Professional healthcare management and analytics platform',
    keywords: 'healthcare, dashboard, analytics, patient management',
    maxWidth: 'xl',
    ...layoutProps
  };

  return (
    <div className="app">
      <MainLayout {...defaultLayoutProps}>
        <AppRouter />
      </MainLayout>
    </div>
  );
};

export default App;
export type { AppProps, AppState };
