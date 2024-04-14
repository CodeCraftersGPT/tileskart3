import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState({
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
       
        if (user.name.trim() === '') {
           setErrors(prevState => ({
                ...prevState,
                name: 'Name is required'
              }));

        }

        if (user.email.trim() === '') {
          setErrors(prevState => ({
                ...prevState,
                email: 'Email is required'
            }));
        }

        if (user.phone.trim() === '') {
            setErrors(prevState => ({
                ...prevState,
                phone: 'Phone is required'
            }));
        }
        if (Object.keys(errors).length > 0) {
            return false;
        }
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
                {errors.name && <p className={styles.error}>{errors.name}</p>}
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
                {errors.email && <p className={styles.error}>{errors.email}</p>}
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
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <button type="submit" className={styles.submitButton}>Register</button>
        </form>
    );
}

export default Registration;
