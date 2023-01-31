import {React, useContext} from 'react'
import {myContext} from '../Context.js'
import ProductCard from "./ProductCard"

export default function Products() {    

    const {beverages} = useContext(myContext)

    // turn this into three components instead?
    // Add a carosel

    const getSpiritsJSX = beverages
        .filter(beverage => beverage.type === "Spirit")
        .map(beverageItem => (
            <ProductCard key={beverageItem.id} beverage={beverageItem} />
        ))
   
    const getWinesJSX = beverages
        .filter(beverage => beverage.type === "Wine")
        .map(beverageItem => (
            <ProductCard key={beverageItem.id} beverage={beverageItem} />
        ))
    const getLiqueursJSX = beverages
        .filter(beverage => beverage.type === "Liqueur")
        .map(beverageItem => (
            <ProductCard key={beverageItem.id} beverage={beverageItem} />
        ))

    return (
        <div className="content-container">
            <h3 className="products-title">Available spirits</h3>
            <div className="products-flex">
                {getSpiritsJSX}
            </div> 
            <h3 className="products-title">Available wines</h3>
            <div className="products-flex">
                {getWinesJSX}
            </div> 
            <h3 className="products-title">Available liqueurs</h3>
            <div className="products-flex">
                {getLiqueursJSX}
            </div> 
        </div>

    )
}