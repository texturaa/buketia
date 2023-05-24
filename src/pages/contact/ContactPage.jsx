import React from 'react';

import classes from "./Contact.module.css";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {Autoplay, EffectFade, Navigation} from "swiper";

const ContactPage = () => {
    return (
        <div>
            <header className={classes.sec1}>
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    navigation={true}
                    effect={"fade"}
                    loop={true}
                    freeMode={true}
                >
                    <SwiperSlide className={classes.sec1Item}>
                        <img className={classes.sec1Image} src="/buketia/images/slider/slide1.jpg" alt="slide"/>
                        <p className={classes.sec1Text}>Сделаем для вас красоту</p>
                    </SwiperSlide>
                    <SwiperSlide className={classes.sec1Item}>
                        <img className={classes.sec1Image} src="/buketia/images/slider/slide2.jpg" alt="slide"/>
                        <p className={classes.sec1Text}>Подними настроение дорогому человеку</p>
                    </SwiperSlide>
                </Swiper>
            </header>

            <section className={classes.sec2}>
                <div className="container">
                    <h2 className={classes.sec2Title}>Как купить наши цветы</h2>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.2794262049697!2d48.47192425178947!3d54.3343691801008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d39b47311b7c5%3A0xc680c1b9a75a16dd!2z0YPQuy4g0JrQsNC70L3QuNC90LAsIDEsINCj0LvRjNGP0L3QvtCy0YHQuiwg0KPQu9GM0Y_QvdC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MzIwMzE!5e0!3m2!1sru!2sru!4v1667952865072!5m2!1sru!2sru"
                        width="100%" height="250" frameBorder="0" style={{border: '0px', pointerEvents: 'none'}}
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className={classes.sec2Box}>
                        <form className={classes.form}>
                            <div className={classes.formTitle}>Контактная форма</div>

                            <input className={classes.input} type="text" name="name" placeholder="Введите имя"/>
                            <input className={classes.input} type="email" name="email" placeholder="Введите почту"/>
                            <textarea className={classes.textarea} rows="4" cols="25" name="message" placeholder="Введите сообщение">

                            </textarea>

                            <button className={classes.formButton}>Отправить</button>
                        </form>

                        <div className={classes.info}>
                            <div className={classes.infoTitle}>Здесь вы можете задать свой вопрос.</div>
                            <div className={classes.infoItem}>Через некоторое время ответ придет вам на почту</div>
                            <div className={classes.infoItem}>Или же позвоните нам по номеру:</div>
                            <div className={classes.infoItem}>+792 74 343 452</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;