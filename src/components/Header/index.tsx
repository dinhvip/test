import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerClasses = `${styles.header} ${className}`.trim();
    
    return (
        <header className={headerClasses}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    Healthy
                </Link>

                <nav className={styles.nav}>
                    <NavLink
                        to="/records"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        <svg className={styles.icon} width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M8 4H24V28H8V4Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 10H20M12 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>自分の記録</span>
                    </NavLink>
                    <NavLink
                        to="/challenges"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        <svg className={styles.icon} width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 18C11 18 7 21 7 25H25C25 21 21 18 16 18Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>チャレンジ</span>
                    </NavLink>
                    <NavLink
                        to="/notifications"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        <div className={styles.iconWrapper}>
                            <svg className={styles.icon} width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M8 12C8 8 11 5 16 5C21 5 24 8 24 12V18L26 22H6L8 18V12Z" stroke="currentColor" strokeWidth="2"/>
                                <path d="M14 26C14 27.1046 14.8954 28 16 28C17.1046 28 18 27.1046 18 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className={styles.badge}>1</span>
                        </div>
                        <span>お知らせ</span>
                    </NavLink>

                    <button 
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M6 10H26M6 16H26M6 22H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Slide-out Menu */}
            {isMenuOpen && (
                <>
                    <div 
                        className={styles.overlay}
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className={styles.drawer}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>

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
                </>
            )}
        </header>
    );
};

export default Header;