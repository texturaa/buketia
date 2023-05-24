import React from 'react';

import classes from "./ProductItem.module.css";

const ProductItem = ({product, add}) => {

    function clickButton(event) {
        event.preventDefault();

        add(product);
    }
    return (
        <div className={classes.card}>
            <div className={classes.cardTop}>
                <img className={classes.cardImage} src={"/buketia/images/products/" + product.image} alt={product.name}/>
                <span className={classes.cardSale}>-{product.sale}%</span>
            </div>
            <div className={classes.cardBottom}>
                <div className={classes.cardPrice}>
                    <div className={classes.cardPriceActual}>
                        <div className={classes.cardPriceTitle + " " + classes.cardPriceBold}>{product.price - (product.price / 100 * product.sale)}₽</div>
                        <div className={classes.cardPriceName}>Со скидкой</div>
                    </div>
                    <div className={classes.cardPriceLast}>
                        <div className={classes.cardPriceTitle}>{product.price}₽</div>
                        <div className={classes.cardPriceName}>Без скидки</div>
                    </div>
                </div>
                <div className={classes.cardName}>{product.name}</div>
                <button onClick={clickButton} className={classes.cardButton}>В корзину</button>
            </div>
        </div>
    );
};

export default ProductItem;