import { Button } from '@material-ui/core';
import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css';


function Banner() {
    const history= useHistory();
    const [showSearch, setShowSearch]=useState(false);
    return (
        <div className='banner'>
           <div className='banner__info'>
               <h1>
                   Get out strrach you imagination
               </h1>

               <Button onClick={() => history.push('/search')}
               variant='outlined'>Explore all courses</Button>
               
           </div>
        </div>
    )
}

export default Banner
