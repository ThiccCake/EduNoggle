import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards';


const Student = () => {
    //set state
    const [students, setStudent] = useState([]);
    //set effect
    useEffect(() => {
      fetch('./student.json')
      .then(res=>res.json())
      .then(data=>setStudent(data));
    }, []);

    return (
        <div>
            <div className="container mt-2 mb-2">
                <h2 className="p-2 mt-2 mb-2"><b>Our Students</b></h2>
                <div className="row">
                    {
                        students.map(student=><Cards 
                            key={student.key}
                            student={student}
                        ></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Student;