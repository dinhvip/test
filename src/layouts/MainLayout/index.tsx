import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  sidebar?: React.ReactNode;
  headerProps?: React.ComponentProps<typeof Header>;
  footerProps?: React.ComponentProps<typeof Footer>;
}

interface MetaTags {
  title: string;
  description: string;
  keywords: string;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  title = 'Dashboard Application',
  description = 'Professional dashboard application with data visualization',
  keywords = 'dashboard, analytics, charts, data visualization',
  showHeader = true,
  showFooter = true,
  className = '',
  maxWidth = 'xl',
  sidebar,
  headerProps = {},
  footerProps = {}
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial states
    handleScroll();
    handleResize();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'sm': return styles.maxWidthSm;
      case 'md': return styles.maxWidthMd;
      case 'lg': return styles.maxWidthLg;
      case 'xl': return styles.maxWidthXl;
      case 'full': return styles.maxWidthFull;
      default: return styles.maxWidthXl;
    }
  };

  const layoutClasses = [
    styles.layout,
    isScrolled ? styles.scrolled : '',
    isMobile ? styles.mobile : '',
    sidebar ? styles.withSidebar : '',
    getMaxWidthClass(),
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={layoutClasses}>
      {showHeader && (
        <Header 
          {...headerProps}
          className={`${headerProps.className || ''} ${isScrolled ? styles.headerScrolled : ''}`}
        />
      )}
      
      <div className={styles.container}>
        {sidebar && (
          <aside className={styles.sidebar} role="complementary">
            {sidebar}
          </aside>
        )}
        
        <main 
          className={styles.main}
          role="main"
          aria-label="Main content"
        >
          <div className={styles.contentWrapper}>
            {children}
          </div>
        </main>
      </div>
      
      {showFooter && (
        <Footer {...footerProps} />
      )}
      
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className={styles.skipLink}
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default MainLayout;
export type { MainLayoutProps, MetaTags };