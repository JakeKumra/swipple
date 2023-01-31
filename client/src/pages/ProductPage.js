import {React, useContext, useState} from 'react'
import {useParams} from "react-router-dom"
import {myContext} from "../Context.js"
import '../styles/index.css';
import '../styles/productpage.css';


export default function ProductPage() {
    const [favourite, setFavourite] = useState(false)
    const {productId} = useParams()
    let {beverages} = useContext(myContext)

    const productInfo = beverages.find(eachItem => (
        eachItem.id == productId
    ))

    let favouriteIcon = favourite ? <i className="fa-solid fa-heart"></i>
                                  : <i className="fa-regular fa-heart"></i>
    
                         
    return (
        <div className='content-container'>
            
            <div className='main'>
                <img className='product-page-img' src={productInfo.imageUrl}></img>
                
                <div className="product-page-name-large">
                    <h1 className='product-page-name'>{productInfo.name}</h1>

                    {/* Show this only on large screens */}
                    <div className='profile large-screen'>
                        <h2 className='profile-name'>Contact Stephan L</h2>
                        <p className='profile-view'>View Profile L</p>
                        
                        <div className='btns-container'>
                            <button className='btns'
                                    onClick={ () => setFavourite(prevState => !prevState) }>
                                        Favorite {favouriteIcon}
                            </button>
                            
                            <button className='btns'>Email <i className="fa-regular fa-envelope"></i></button>
                        </div>


                    </div>

                </div>
            </div>

            {/* Show this only on small screens */}
            <div className='profile small-screen'>
                <h2 className='profile-name'>Contact Stephan</h2>
                <p className='profile-view'>View Profile</p>
                        
                <div className='btns-container'>
                    <button className='btns'
                            onClick={ () => setFavourite(prevState => !prevState) }>
                                        Favorite {favouriteIcon}
                            </button>
                    <button className='btns'>Email <i className="fa-regular fa-envelope"></i></button>
                </div>

            </div>

            <div>
                <h3 className='product-page-title'>Product Description</h3>
                <p className='product-page-info'>{productInfo.description}</p>
                
                <h3 className='product-page-title'>Information</h3>

                <p className='product-page-info bold'>Alcohol Type</p>
                <p className='product-page-info'>{productInfo.type}</p>

                <p className='product-page-info bold'>Estimated Value</p>
                <p className='product-page-info'>£{productInfo.value}</p>

                <p className='product-page-info bold'>Size</p>
                <p className='product-page-info'>{productInfo.size}</p>

                <p className='product-page-info bold'>Abv</p>
                <p className='product-page-info'>{productInfo.abv}</p>
            </div>
            
            
            
        </div>
    )
}