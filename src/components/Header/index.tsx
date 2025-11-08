import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const headerClasses = `${styles.header} ${className}`.trim();
    
    return (
        <header className={headerClasses}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    HealthCare
                </Link>

                <nav className={styles.nav}>
                    <NavLink
                        to="/columns"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        Columns
                    </NavLink>
                    <NavLink
                        to="/records"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        My Records
                    </NavLink>
                    <NavLink
                        to="/challenges"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                    >
                        Challenges
                    </NavLink>

                    <Link to="/login" className={styles.loginButton}>
                        Login
                    </Link>
                    <Link to="/signup" className={styles.signupButton}>
                        Sign Up
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;