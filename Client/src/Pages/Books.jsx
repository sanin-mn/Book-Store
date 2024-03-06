import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetchAllBooks()
    },[])

    const fetchAllBooks = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/books")
            setBooks(res.data);
        }catch(err){
            console.log(err);
        }
    }

  return (

    <div>
        <h1>Book App</h1>
        
        <div className='books'>
            {
                books.map((book)=>(
                    <div className='book' key={book.id}>
                        {book.cover && <img src={book.cover} alt='cover'/>}
                        <h2>{book.title}</h2>
                        <h3>{book.desc}</h3>
                        <span>{book.price}</span>
                    </div>
                ))
            }
        </div>
        <button><Link to={'/add'}>Add new book</Link></button>
    </div>
  )
}

export default Books