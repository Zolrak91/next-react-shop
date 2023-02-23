import React from 'react';
import Image from 'next/image';
import styles from '@styles/NewPassword.module.scss';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles["form-container"]}>
                <Image src="./logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
                    <h1 className={styles.title}>Create a new password</h1>
                    <p className="subtitle">Enter a new password for your account</p>
                <form action="/" className={styles.form}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" id="password" placeholder="*********" className={`${styles["input"]} ${styles["input-password"]}`} />
                    <label htmlFor="new-password" className={styles.label}>Password</label>
                    <input type="password" id="new-password" placeholder="*********" className={`${styles["input"]} ${styles["input-password"]}`} />
                    <input type="submit" value="Confirm" className={`${styles["primary-button"]} ${styles["login-button"]}`} />
                </form>
            </div>
        </div>
    );
};

export default Login;