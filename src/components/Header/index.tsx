import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '../icon/Logo';
import Challenge from '../icon/Challenge';
import Memo from '../icon/Memo';
import Info from '../icon/Info';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const headerClasses = `${styles.header} ${className}`.trim();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        // Close menu when scrolling
        const handleScroll = () => {
            setIsMenuOpen(false);
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('scroll', handleScroll);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);
    
    return (
        <header className={headerClasses}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <Logo />
                </Link>

                <nav className={styles.nav}>
                    <NavLink
                        to="/records"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        <Memo />
                        <span>自分の記録</span>
                    </NavLink>
                    <NavLink
                        to="/columns"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                       <Challenge />
                        <span>チャレンジ</span>
                    </NavLink>
                    <NavLink
                        to="/notifications"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        <div className={styles.iconWrapper}>
                            <Info />
                            <span className={styles.badge}>1</span>
                        </div>
                        <span>お知らせ</span>
                    </NavLink>

                    <div className={styles.menuContainer} ref={menuContainerRef}>
                        <button 
                            className={styles.menuButton}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            ) : (
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M6 10H26M6 16H26M6 22H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            )}
                        </button>

                        {isMenuOpen && (
                            <div className={styles.drawer}>
                                <nav className={styles.drawerNav}>
                            <Link 
                                to="/records" 
                                className={styles.drawerLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                自分の記録
                            </Link>
                            <Link 
                                to="/weight" 
                                className={styles.drawerLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                体重グラフ
                            </Link>
                            <Link 
                                to="/goals" 
                                className={styles.drawerLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                目標
                            </Link>
                            <Link 
                                to="/courses" 
                                className={styles.drawerLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                選択中のコース
                            </Link>
                            <Link 
                                to="/columns" 
                                className={styles.drawerLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                コラム一覧
                            </Link>
                            <Link 
                                to="/settings" 
                                className={styles.drawerLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                設定
                            </Link>
                        </nav>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;