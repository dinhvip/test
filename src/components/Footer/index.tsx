import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link to="/company" className={styles.link}>会社概要</Link>
                    <Link to="/terms" className={styles.link}>運営会社</Link>
                    <Link to="/usage" className={styles.link}>利用規約</Link>
                    <Link to="/privacy" className={styles.link}>個人情報の取扱について</Link>
                    <Link to="/law" className={styles.link}>特定商取引法に基づく表記</Link>
                    <Link to="/contact" className={styles.link}>お問い合わせ</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;