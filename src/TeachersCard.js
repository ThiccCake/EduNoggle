import React from 'react';

const TeachersCard = (props) => {
    //destructuring
    const {name, description, dept, mail, img} = props.teacher;
    return (
        
            <div className="col-sm-4">
                    <div className="card shadow mb-3 student-card">
                        <img src={img} className="card-img mt-2" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><b>{name}</b></h5>
                            <h6><b>Department: {dept}</b></h6>
                            <h6><b>mail: {mail}</b></h6>
                            <p className="card-text">{description}</p>
                            <button className="btn btn-primary">Contact Now</button>
                        </div>
                    </div>
                </div>
        
    );
};

export default TeachersCard;