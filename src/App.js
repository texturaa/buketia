import React, {useEffect, useState} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import Navigation from "./ui/blocks/navigation/Navigation";
import Footer from "./ui/blocks/footer/Footer";

import './style/base.css';

import MainPage from "./pages/main/MainPage";
import AboutPage from "./pages/about/AboutPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import ContactPage from "./pages/contact/ContactPage";
import InfoPage from "./pages/info/InfoPage";
import AuthPage from "./pages/auth/AuthPage";


function App() {
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
        },
        {
            id: 5,
            name: "Букет из 25 тюльпанов",
            image: "kids5-thumb.jpg",
            price: 3300,
            sale: 10
        },
        {
            id: 6,
            name: "Букет из пионовидных роз",
            image: "kids6-thumb.jpg",
            price: 4400,
            sale: 10
        },
        {
            id: 7,
            name: "Букет из эустомы",
            image: "kids7-thumb.jpg",
            price: 2200,
            sale: 10
        },
        {
            id: 8,
            name: "Букет из красных роз",
            image: "kids8-thumb.jpg",
            price: 3300,
            sale: 10
        }
    ]

    const [basket, setBasket] = useState({});
    const [count, setCount] = useState(0);

    function addItem(product) {
        const id = product.id;
        let item = basket[id];

        if(item === undefined) {
            item = {...product};
            item.amount = 0;
            item.count = 0;
        }

        item.amount++;
        item.cost = (item.price - (item.price / 100 * item.sale)) * item.amount;

        const newBasket = {...basket, [id]: item};

        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));

        setCount(count + 1);
    }

    function removeItem(product) {
        const id = product.id;
        let item = basket[id];

        if(item === undefined) return;

        if(item.amount === 1) {
            const newBasket = {...basket};
            delete newBasket[item.id];
            setBasket(newBasket);
            setCount(count - 1);
            localStorage.setItem("basket", JSON.stringify(newBasket));
            return;
        }

        item.amount--;
        item.cost = (item.price - (item.price / 100 * item.sale)) * item.amount;
        const newBasket = {...basket, [id]: item};
        setBasket(newBasket);
        setCount(count - 1);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    useEffect(() => {
        if(localStorage.getItem("basket")) {
            const basket = JSON.parse(localStorage.getItem("basket"));

            let amount = 0;

            for(let key in basket) {
                amount += basket[key].amount;
            }

            setCount(amount);
            setBasket(basket);
        }
    }, []);
  return (
    <HashRouter>
        <Navigation basket={basket} count={count} add={addItem} remove={removeItem}/>
        <Routes>
            <Route path="/" element={<MainPage products={products} add={addItem}/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/catalog" element={<CatalogPage products={products} add={addItem}/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/info" element={<InfoPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
        <Footer/>
    </HashRouter>
  );

}

export default App;
