import {React, useState} from "react"
import {Link} from 'react-router-dom';

export default function ProductCard({beverage}) {

    let myIcon;
    
    const [favourite, setFavourite] = useState(false)
    const [hover, setHover] = useState(false)

    if (favourite) {
        myIcon = <i className="icon-favourite fa-solid fa-heart"
                    onClick={()=>setFavourite(prevState => !prevState )}>
                </i>
    } else if (hover) {
        myIcon = <i className="icon-favourite fa-regular fa-heart" 
                    onClick={()=>setFavourite(prevState => !prevState )}>
                 </i>
    }
    
    return (
        <>
            <div className="product-card-container">
                
                <div className="product-image-container"
                     onMouseOver={ () => setHover(true)}
                     onMouseLeave={ () => setHover(false)}
                >
                    <Link to={`/product-page/${beverage.id}`}>
                        <img 
                            className="product-card-img" 
                            src={`${beverage.imageUrl}`}
                            >
                        </img>
                    </Link>
                    {myIcon}
                </div>
                 

                    <h3 className="product-card-value">
                        Est. value 
                        <span className="product-card-num">£{beverage.value}</span>
                    </h3>
                    <h3 className="product-card-title">{beverage.name}</h3>
            </div>  
        </>
    )
}