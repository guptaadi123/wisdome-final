import { Button } from '@material-ui/core';
import React from 'react';
import './search.css';
import db from './firebase';
import Searchresult from './Searchresult';
import {useEffect} from "react";
import  {useState } from "react";
function Search() {
    const [rooms,setRooms]= useState([]);
    useEffect(() => {
        db.collection('Courses').onSnapshot(snapshot=>
            (     
            setRooms(

                snapshot.docs.map(doc => ({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        ),)
     
        
    }, [])
    return (
        <div className='search'>
            <div className='searchPage__info'>
              
                <h1>Courses</h1>
                <Button
                variant="outlines">Python</Button>
                <Button
                variant="outlines">Machine learning</Button>
                <Button
                variant="outlines">Big data</Button>
                
            </div>
            {rooms.map(room =>(
             <Searchresult  

             
               id={room.id}
               img={room.data.IMG}
               title={room.data.courseName}
               author={room.data.authorName}
               description={room.data.summary}
               price={room.data.price}
               name={room.data.tag[0]}
               Duration={room.data.duration}
               star={4.73}
               link={"https://www.google.com"}
              
              />
                
                
                

           ),
           )}
           
        </div>
    )
}

export default Search
