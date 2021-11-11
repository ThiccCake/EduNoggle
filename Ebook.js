import React from 'react';
import { useState, useEffect } from 'react';
import Book from './Book';

const Ebook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
       fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
       .then(res=>res.json())
       .then(data=>setBooks(data.items));
    }, []);

    return (
        <div>
            
            <div className="container p-2 mt-2 mb-2">
                <h1>Books</h1>

                <div className="row">
                    
                    {
                        books.map(book=><Book key={book.id} book={book}></Book>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Ebook;