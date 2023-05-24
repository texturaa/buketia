import React from 'react';

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h5 className={classes.title}>Контакты</h5>
            <p className={classes.item}>Телефон / +79 28 444 3652</p>
            <p className={classes.item}>Почта / Buketia@yahoo.com</p>
            <p className={classes.item}>Адрес / Калнина 1. Ульяновск</p>
        </footer>
    );
};

export default Footer;