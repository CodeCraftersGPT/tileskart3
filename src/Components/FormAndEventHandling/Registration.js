import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
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

    const handlePasswordChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            password: event.target.value
        }));
    };
    

    const handleSubmit = (event) => {
       
        event.preventDefault();

        const newErrors = {}

        if (user.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        if (user.email.trim() === '') {
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(user.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (user.phone.trim() === '') {
            newErrors.phone = 'Phone is required';
        }
        else if (!/^\d{10}$/.test(user.phone)) {
            newErrors.phone = 'Phone is invalid';
        }

        if (user.password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        else if (!/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(user.password)) {
            newErrors.password = 'Password should be atleast 8 characters long and should contain atleast one number and one special character';
        }
        setErrors(newErrors);
            
     
        if (Object.keys(errors).length > 0) {
            return false;
        }
        else
        {
            alert("Registration Successful");
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
            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    value={user.password}
                    onChange={handlePasswordChange}
                />
            </div>
                {errors.password && <p className={styles.error}>{errors.password}</p>}
            <button type="submit" className={styles.submitButton}>Register</button>
        </form>
    );
}

export default Registration;
