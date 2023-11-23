import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
    return ( 
    <div className="shop">
        <div className="shopTitle">
        <h2><span>YOUR BEST PETS CARE & INFO </span></h2>
            
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
            <Product data={product} />
            ))}
        </div>
    </div>
    );
};