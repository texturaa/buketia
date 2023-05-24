import React, {useState} from 'react';

import classes from "./Navigation.module.css";
import {Link} from "react-router-dom";

const Navigation = ({basket, count, add, remove}) => {
    const [isBox, setIsBox] = useState(false);

    let cost = 0;

    return (
        <nav className={classes.nav}>
            <div className={"container " + classes.navContainer}>
                <img className={classes.navLogo} src="/buketia/images/logo.jpg" alt="Logotype"/>

                <ul className={classes.navList}>
                    <li className={classes.navListItem}>
                        <Link to="/" className={classes.navListLink}>Главная</Link>
                    </li>
                    <li className={classes.navListItem}>
                        <Link to="/about" className={classes.navListLink}>О нас</Link>
                    </li>
                    <li className={classes.navListItem}>
                        <Link to="/catalog" className={classes.navListLink}>Каталог</Link>
                    </li>
                    <li className={classes.navListItem}>
                        <Link to="/contact" className={classes.navListLink}>Контакты</Link>
                    </li>
                    <li className={classes.navListItem}>
                        <Link to="/auth" className={classes.navListLink}>Регистрация</Link>
                    </li>
                </ul>

                <div className={classes.navEmpty}></div>

                <div onClick={() => setIsBox(!isBox)} className={classes.basket}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                    <div className={classes.basketCount}>{count}</div>
                </div>

                {isBox && (
                    <div className={classes.box}>
                        <div className={classes.boxContainer}>
                            {
                                Object.entries(basket).map(([id, product]) => {
                                    cost += product.cost;
                                    return (
                                        <div className={classes.basketItem}>
                                            <div className={classes.basketItemImage}>
                                                <img src={"/buketia/images/products/" + product.image} alt={product.name}/>
                                            </div>
                                            <div className={classes.basketItemContent}>
                                                <p className={classes.basketItemName}>{product.name}</p>
                                                <p className={classes.basketItemAmount}>Количество: {product.amount}</p>
                                                <p className={classes.basketItemPrice}>Цена: {product.cost}₽</p>
                                            </div>

                                            <div className={classes.basketItemControl}>
                                                <div className={classes.basketItemPlus} onClick={() => add(product)}>+</div>
                                                <div className={classes.basketItemMinus} onClick={() => remove(product)}>−</div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className={classes.boxInfo}>
                            <p className={classes.boxInfoPrice}>{cost}₽</p>
                            <button className={classes.boxInfoButton}>Оформить заказ</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;