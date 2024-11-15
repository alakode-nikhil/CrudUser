import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListUsers() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => setData(response.data))
    .then((json) => console.log(json));
  },[data]);

  const handleDelete = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      })
      .then((respone) => {
        if(respone.ok){
            console.log('User Deleted')
            setData([])
        }
      });
      
  }
    
  return (
    <>
        <Link className='btn btn-xl btn-primary m-2' to='/create'>Create</Link>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Location</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>            
                {
                    data.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td><Link className='btn btn-warning' to={`/view/${item.id}`} >View</Link></td>
                            <td><Link className='btn btn-success' to={`/edit/${item.id}`}>Edit</Link></td>
                            <td><button className='btn btn-danger' onClick={() => {handleDelete(item.id)}}>Delete</button></td>
                        </tr>
                    ))
                }                
            </tbody>
        </table>
    </>
  )
}
