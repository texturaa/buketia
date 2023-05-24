import React from 'react';

import classes from "./Catalog.module.css";
import ProductItem from "../../components/ProductItem/ProductItem";

const CatalogPage = ({products, add}) => {
    return (
        <div>
            <header className={classes.sec1}>
                <div className="container">
                    <h2 className={classes.sec1Title}>Каталог <span className={classes.sec1Subtitle}>8 товаров</span></h2>

                    <div className={classes.sec1Box}>
                        {
                            products.map(product => (
                                <ProductItem product={product} add={add} key={product.id}/>
                            ))
                        }
                    </div>
                </div>
            </header>

            <section className={classes.sec2}>
                <div className="container">
                    <h2 className={classes.sec2Title}>Найди подходящие композиции</h2>
                    <h4 className={classes.sec2Subtitle}>укетия это восхитительная красота, низкая цена, безупречное качество и персональный сервис.</h4>
                </div>
            </section>

            <section className={classes.sec3}>
                <div className="container">
                    <h2 className={classes.sec3Title}>Как купить наши цветы</h2>

                    <div className={classes.sec3Box}>
                        <div className={classes.sec3Item}>
                            <div className={classes.sec3ItemTitle}>
                                1. РЕГИСТРАЦИЯ
                            </div>
                            <div className={classes.sec3ItemDesc}>
                                Создайте учетную запись или войдите в существующий аккаунт
                            </div>
                        </div>
                        <div className={classes.sec3Item}>
                            <div className={classes.sec3ItemTitle}>
                                2. ВЫБОР
                            </div>
                            <div className={classes.sec3ItemDesc}>
                                Выберите подходящие вам цветы
                            </div>
                        </div>
                        <div className={classes.sec3Item}>
                            <div className={classes.sec3ItemTitle}>
                                3. ОФОРМЛЕНИЕ
                            </div>
                            <div className={classes.sec3ItemDesc}>
                                Заполните данные и оплатите покупку
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.2794262049697!2d48.47192425178947!3d54.3343691801008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d39b47311b7c5%3A0xc680c1b9a75a16dd!2z0YPQuy4g0JrQsNC70L3QuNC90LAsIDEsINCj0LvRjNGP0L3QvtCy0YHQuiwg0KPQu9GM0Y_QvdC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MzIwMzE!5e0!3m2!1sru!2sru!4v1667952865072!5m2!1sru!2sru"
                width="100%" height="250" frameBorder="0" style={{border: '0px', pointerEvents: 'none'}}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default CatalogPage;