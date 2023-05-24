import React from 'react';

import classes from "./MainPage.module.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import {Link} from "react-router-dom";

const MainPage = () => {
    const products = [
        {
            id: 1,
            name: "Композиция в сумочке",
            image: "kids1-thumb.jpg",
            price: 2200,
            sale: 10
        },
        {
            id: 2,
            name: "Букет кустовых роз",
            image: "kids2-thumb.jpg",
            price: 4400,
            sale: 10
        },
        {
            id: 3,
            name: "Кустовые розы в коробке",
            image: "kids3-thumb.jpg",
            price: 5500,
            sale: 10
        },
        {
            id: 4,
            name: "Террариум для живых цветов",
            image: "kids4-thumb.jpg",
            price: 2750,
            sale: 10
        }
    ]


    return (
        <div>
            <header>
                <img className={classes.headerImage} src="/buketia/images/backgrounds/1.jpg" alt="background"/>
            </header>

            <section className={classes.sec2}>
                <h1 className={classes.sec2Title}>Добро пожаловать в мир цветов</h1>
                <h4 className={classes.sec2Subtitle}>Мы поможем тебе с выбором</h4>
            </section>

            <section className={classes.sec3}>
                <div className="container">
                    <h2 className={classes.sec3Title}>Найди подходящие композиции</h2>
                    <h4 className={classes.sec3Subtitle}>Букетия это восхитительная красота, низкая цена, безупречное качество и персональный сервис.</h4>
                </div>
            </section>

            <section className={"container " + classes.sec4}>
                <div className={classes.sec4Item}>
                    <div className={classes.sec4ItemTitle}>
                        Концепт
                    </div>
                    <div className={classes.sec4ItemDesc}>
                        Широкий выбор композиций
                    </div>
                    <Link to="/info" className={classes.sec4ItemLink}>Узнать больше</Link>
                </div>
                <div className={classes.sec4Item}>
                    <div className={classes.sec4ItemTitle}>
                        Живые цветы
                    </div>
                    <div className={classes.sec4ItemDesc}>
                        Большой выбор живых цветов в террариумах с консультацией
                    </div>
                    <Link to="/info" className={classes.sec4ItemLink}>Узнать больше</Link>
                </div>
                <div className={classes.sec4Item}>
                    <div className={classes.sec4ItemTitle}>
                        Композиции
                    </div>
                    <div className={classes.sec4ItemDesc}>
                        Порадуйте своего близкого лучшими цветами
                    </div>
                    <Link to="/info" className={classes.sec4ItemLink}>Узнать больше</Link>
                </div>
            </section>

            <section className={classes.sec5}>
                <div className="container">
                    <h2 className={classes.sec5Title}>Рекомендуемые предложения</h2>

                    <div className={classes.sec5List}>
                        {
                            products.map(product => (
                                <ProductItem product={product}/>
                            ))
                        }
                    </div>
                </div>
            </section>

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.2794262049697!2d48.47192425178947!3d54.3343691801008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d39b47311b7c5%3A0xc680c1b9a75a16dd!2z0YPQuy4g0JrQsNC70L3QuNC90LAsIDEsINCj0LvRjNGP0L3QvtCy0YHQuiwg0KPQu9GM0Y_QvdC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MzIwMzE!5e0!3m2!1sru!2sru!4v1667952865072!5m2!1sru!2sru"
                    width="100%" height="250" frameBorder="0" style={{border: '0px', pointerEvents: 'none'}}
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default MainPage;