import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3 className={styles.title}>About Us</h3>
                    <Link to="/about" className={styles.link}>About HealthCare</Link>
                    <Link to="/team" className={styles.link}>Our Team</Link>
                    <Link to="/careers" className={styles.link}>Careers</Link>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.title}>Services</h3>
                    <Link to="/columns" className={styles.link}>Health Columns</Link>
                    <Link to="/records" className={styles.link}>Health Records</Link>
                    <Link to="/challenges" className={styles.link}>Health Challenges</Link>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.title}>Support</h3>
                    <Link to="/help" className={styles.link}>Help Center</Link>
                    <Link to="/contact" className={styles.link}>Contact Us</Link>
                    <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
                    <Link to="/terms" className={styles.link}>Terms of Service</Link>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.title}>Connect</h3>
                    <a href="https://facebook.com" className={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" className={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>

            <p className={styles.copyright}>
                © {new Date().getFullYear()} HealthCare. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;