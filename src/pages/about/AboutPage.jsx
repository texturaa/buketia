import React from 'react';

import classes from "./AboutPage.module.css";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <header className={classes.sec1}>
                <div className="container">
                    <h2 className={classes.sec1Title}>Профиль компании</h2>
                    
                    <div className={classes.sec1Box}>
                        <div className={classes.sec1Item}>
                            <img src="/buketia/images/kid.jpg" alt="kid"/>
                        </div>
                        <div className={classes.sec1Item}>
                            <p>
                                Сеть магазинов "Букетия" с 2016 года занимается доставкой по городу Ульяновску роз и красивых оригинальных букетов, с любовью собранных только из свежих качественных цветов опытными дизайнерами-флористами. У нас Вы можете купить и заказать доставку сборных букетов, а также букетов из роз, хризантем, альстромерий, цветы в корзинках и коробках в любую часть города Ульяновска. Кроме этого Вы можете купить и оформить у нас доставку цветочного террариума на любой вкус и цвет по самым доступным ценам в городе.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section className={classes.sec2}>
                <div className="container">
                    <h2 className={classes.sec2Title}>Наша миссия</h2>
                    <h4 className={classes.sec2Subtitle}>Мы хотим, что бы Вы дарили друг другу радость и красоту, по этому стараемся всё делать качественно, профессионально и с любовью, как для себя! Наша задача показать людям какие красивые и разнообразные бывают цветы и их сочетания. Каждое наше творение уникально и в каждом присутствует частичка нашей души.</h4>
                </div>
            </section>

            <section className={"container " + classes.sec3}>
                <div className={classes.sec3Item}>
                    <div className={classes.sec3ItemTitle}>
                        НАША ГОРДОСТЬ- ЭТО НАШИ ФЛОРИСТЫ!
                    </div>
                    <div className={classes.sec3ItemDesc}>
                        В нашей команде собрались опытные креативные флористы со стажем более 13 лет. Мы постоянно совершенствуем своё мастерство, следим за трендами и тенденциями, обучаемся у лучших мастеров флористики.
                    </div>
                    <Link to="/info" className={classes.sec3ItemLink}>Узнать больше</Link>
                </div>
                <div className={classes.sec3Item}>
                    <div className={classes.sec3ItemTitle}>
                        МЫ ЦВЕТОЧНЫЕ ПЕРФЕКЦИОНИСТЫ
                    </div>
                    <div className={classes.sec3ItemDesc}>
                        Мы очень щепетильны и разборчивы в цветах. Очень бережно относимся к каждому цветочку. Стараемся держать марку и соответствовать даже самым требовательным и утонченным клиентам.
                    </div>
                    <Link to="/info" className={classes.sec3ItemLink}>Узнать больше</Link>
                </div>
                <div className={classes.sec3Item}>
                    <div className={classes.sec3ItemTitle}>
                        ВЫСОКОЕ КАЧЕСТВО ЦВЕТОВ
                    </div>
                    <div className={classes.sec3ItemDesc}>
                        Для нас в приоритете в первую очередь свежесть цветов и качество предоставляемых услуг. По этому мы выбираем для вас только лучшее. Закупаем цветы у премиальных проверенных садовников.
                    </div>
                    <Link to="/info" className={classes.sec3ItemLink}>Узнать больше</Link>
                </div>
            </section>

            <div className={classes.sec4}>
                <div className="container">
                    <h2 className={classes.sec1Title}>Другой персонал</h2>

                    <div className={classes.sec4Box}>
                        <div className={classes.sec4Item}>
                            <img className={classes.sec4ItemImage} src="/buketia/images/personal/user1.jpg" alt="people"/>
                            <h3 className={classes.sec4ItemTitle}>Татьяна Любовская</h3>
                            <p className={classes.sec4ItemSubtitle}>Главный флорист</p>
                        </div>
                        <div className={classes.sec4Item}>
                            <img className={classes.sec4ItemImage} src="/buketia/images/personal/user2.jpg" alt="people"/>
                            <h3 className={classes.sec4ItemTitle}>Макским Александров</h3>
                            <p className={classes.sec4ItemSubtitle}>Генеральный директор</p>
                        </div>
                        <div className={classes.sec4Item}>
                            <img className={classes.sec4ItemImage} src="/buketia/images/personal/user3.jpg" alt="people"/>
                            <h3 className={classes.sec4ItemTitle}>Ева Свардовская</h3>
                            <p className={classes.sec4ItemSubtitle}>Флорист</p>
                        </div>
                        <div className={classes.sec4Item}>
                            <img className={classes.sec4ItemImage} src="/buketia/images/personal/user4.jpg" alt="people"/>
                            <h3 className={classes.sec4ItemTitle}>Виктор Рактович</h3>
                            <p className={classes.sec4ItemSubtitle}>Доставщик</p>
                        </div>
                    </div>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.2794262049697!2d48.47192425178947!3d54.3343691801008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d39b47311b7c5%3A0xc680c1b9a75a16dd!2z0YPQuy4g0JrQsNC70L3QuNC90LAsIDEsINCj0LvRjNGP0L3QvtCy0YHQuiwg0KPQu9GM0Y_QvdC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MzIwMzE!5e0!3m2!1sru!2sru!4v1667952865072!5m2!1sru!2sru"
                width="100%" height="250" frameBorder="0" style={{border: '0px', pointerEvents: 'none'}}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default AboutPage;