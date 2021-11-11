import React from 'react';
import './Ebook.css';

const Book = (props) => {
    const {volumeInfo, imageLinks} = props.book;
    return (
        <div className="col-sm-4 mb-3">
             <div className="card shadow book-cart">
                <div className="card-body">
                    <img src={volumeInfo.imageLinks.smallThumbnail} alt="" />
                    <h5>Title: {volumeInfo.title}</h5>
                    <p>Subtitle: {volumeInfo.subtitle}</p>
                    <p>Author: {volumeInfo.authors}</p>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger">Download</button>
                </div>
             </div>
        </div>
    );
};

export default Book;