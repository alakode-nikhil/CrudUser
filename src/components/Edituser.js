import React from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Edituser() {
  
    const {id} = useParams();
    
    const [data,setData] = useState([]);
    const [formData, setFormData] = useState([]);

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setData(response.data))
      .then((json) => console.log(json));
    },[data,id]);

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        }
        )
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const insertData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address:{city: formData.location} 
        }
        console.log(insertData)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'POST',
            body: JSON.stringify(insertData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
          
    }
  
    return (
    <div className='container'>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' className='form-control mt-2' name='name' value={data.name} onChange={handleChange}/>
                <input type='text' className='form-control mt-2' name='phone' value={data.phone} onChange={handleChange}/>
                <input type='text' className='form-control mt-2' name='email' value={data.email} onChange={handleChange}/>
                <button type='submit' className='btn btn-success mt-2'>Update</button>
            </form>
            <Link className='btn btn-secondary mt-2' to={'/'}>Home</Link>
        </div>
  )
}
