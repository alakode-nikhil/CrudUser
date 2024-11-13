import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CreateUser() {

    const [formData, setFormData] = useState([]);

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

        fetch('https://jsonplaceholder.typicode.com/users', {
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
                <input type='text' className='form-control mt-2' name='name' placeholder='Name' onChange={handleChange}/>
                <input type='text' className='form-control mt-2' name='phone' placeholder='Phone' onChange={handleChange}/>
                <input type='text' className='form-control mt-2' name='email' placeholder='Email' onChange={handleChange}/>
                <input type='text' className='form-control mt-2' name='location' placeholder='Location' onChange={handleChange}/>
                <button type='submit' className='btn btn-primary mt-2'>Create</button>
            </form>
            <Link className='btn btn-secondary mt-2' to={'/'}>Home</Link>
        </div>
    )
}
