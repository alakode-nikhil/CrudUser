import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function Viewuser() {
    const {id} = useParams();
    
    const [data,setData] = useState([]);

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setData(response.data))
      .then((json) => console.log(json));
    },[data,id]);
    
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body pt-2">
                    <p className='card=text'>Id: {data.id}</p>
                    <p className='card=text'>Name: {data.name}</p>
                    <p className='card=text'>User Name: {data.username}</p>
                    <p className='card=text'>Email: {data.email}</p>
                    <p className='card=text'>Phone: {data.phone}</p>
                    <p className='card=text'>Website: {data.website}</p>
                </div>
            </div>
            <Link className='btn btn-secondary mt-2' to={'/'}>Home</Link>
        </div>
    )
}
