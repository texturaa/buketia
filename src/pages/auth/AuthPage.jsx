import React from 'react';

import classes from "./Auth.module.css";

const AuthPage = () => {
    return (
        <div className={classes.auth}>
            <div className={classes.box}>
                <form className={classes.form}>
                    <div className={classes.title}>Авторизация</div>

                    <div className={classes.inputs}>
                        <input className={classes.input} type="text" name="name" placeholder="Логин"/>
                        <input className={classes.input} type="password" name="password" placeholder="Пароль"/>
                    </div>

                    <button className={classes.button}>Войти</button>

                    <div className={classes.links}>
                        <a className={classes.link}>Забыли пароль?</a>
                        <a className={classes.link}>Зарегистрироваться</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;