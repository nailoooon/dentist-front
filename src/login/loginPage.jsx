import React, {useState} from 'react';
import styles from './login.module.css'
import axios from "axios";
import {IsAuth, LogOut, SERVER_NAME} from "../API/Constants";
import {useNavigate} from "react-router-dom";
import MainPage from "../mainPage/MainPage";

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        axios.post(SERVER_NAME + "user/auth", {login: username, password: password})
            .then(res => {
                const token = res.data
                if (!token) {
                    LogOut()
                    navigate('/')
                }
                localStorage.setItem('token', token)
                navigate('/admin')
            })
            .catch(() => {
                LogOut()
                navigate('/')
            })
    };

    if (IsAuth()) {navigate("/")}

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>Войдите в аккаунт</h1>
            <div className={styles.formGroup}>
                <label htmlFor="username">Логин:</label>
                <input
                    className={styles.formControl}
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Пароль:</label>
                <input
                    className={styles.formControl}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button className={styles.btn} type="submit">Login</button>
        </form>
    );
};

export default LoginPage;