import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@containers/Layout';
import Header from '@components/Header';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    };

    return (
        <Layout>
            <Header/>
            <div className={styles.login}>
                <div className={styles["form-container"]}>
                    <Image src="./logos/logo_yard_sale.svg" alt="logo" className={styles.logo}/>
                    <form action="/" className={styles.form} ref={form}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input type="text" name="email" placeholder="platzi@example.com" className={styles["input input-email"]}/>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" name="password" placeholder="*********" className={styles["input input-password"]}/>
                        <button className={styles["primary-button login-button"]} onClick={handleSubmit}>Log in</button>
                        <Link href="/">Forgot my password</Link>
                    </form>            
                    <button className={styles["secondary-button signup-button"]}>Sign up</button>
                </div>
            </div>
        </Layout>
    );
};

export default Login;

// OBSOLETO. AHORA USA LOGIN.JS