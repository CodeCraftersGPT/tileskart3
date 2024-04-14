import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login submitted for user:', username);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.inputGroup}>
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    className={styles.input}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.submitButton}>Log In</button>
        </form>
    );
}

export default Login;
