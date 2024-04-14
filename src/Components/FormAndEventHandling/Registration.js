import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleNameChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            name: event.target.value
        }));
    };

    const handleEmailChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            email: event.target.value
        }));
    };

    const handlePhoneChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            phone: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User Registered:', user);
        // Implement registration logic here
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    value={user.name}
                    onChange={handleNameChange}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={user.email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    value={user.phone}
                    onChange={handlePhoneChange}
                />
            </div>
            <button type="submit" className={styles.submitButton}>Register</button>
        </form>
    );
}

export default Registration;
