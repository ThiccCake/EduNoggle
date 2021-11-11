import React from 'react';
import './../Home/Home.css';

const Cards = (props) => {
    //destructuring
    const {name, description, roll, classes, img} = props.student;

    return (
   
            <div className="col-sm-4">
                    <div className="card shadow mb-3 student-card">
                        <img src={img} className="card-img mt-2" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><b>{name}</b></h5>
                            <h6>Roll: {roll}</h6>
                            <h6>Class: {classes}</h6>
                            <p className="card-text">{description}</p>
                            <button className="btn btn-primary">Students Details</button>
                        </div>
                    </div>
                </div>
       
    );
};

export default Cards;