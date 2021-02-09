import React from 'react'
import './searchresult.css'
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';


function Searchresult({img,Duration,title,description,star,price,author,link}) {


    return (
        <div className='searchResult'>
            <img
                src={img} alt=""
            />

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p><strong>Duration of Course</strong>{Duration}</p>                   
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResult__star'> 
                        <StarIcon  className="searchResult__star" />
                    
                    </div>
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResult__star'> 
                        <StarIcon  className="searchResult__star" />
                        <StarIcon  className="searchResult__star" />
                    
                    </div>
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResult__star'> 
                        <StarIcon  className="searchResult__star" />
                        <StarIcon  className="searchResult__star" />
                    
                    </div>
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResult__star'> 
                        <StarIcon  className="searchResult__star" />
                    <StarIcon  className="searchResult__star" />
                    <StarIcon  className="searchResult__star" />
                    <StarIcon  className="searchResult__star" />
                    <StarIcon  className="searchResult__star" />
                    
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResult__star'> 
                        <StarIcon  className="searchResult__star" />
                        <p>
                            <strong>
                                {star}
                            </strong>
                        </p>
                    </div>


                            <div className="searchResults__price">
                        <h2>${price}</h2>
                        
                        <Button id="goto_button"href={link}>GO TO Course</Button> 
                        
                     

                    </div>
                    
                    <div className='searchResult_heart'> 
                        <FavoriteIcon  className="searchResult_heart" />
                        <p>
                            {/* <strong>
                                {star}
                            </strong> */}
                        </p>
                    </div>

                    
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Searchresult
