import React from 'react';
import { useState, useEffect } from 'react';
import TeachersCard from './TeachersCard';

const Teachers = () => {
    //set state
    const [teachers, setTeachers] = useState([]);
    //set effect
    useEffect(() => {
      fetch('./teachers.json')
      .then(res=>res.json())
      .then(data=>setTeachers(data));
    }, []);

    return (
        <div>
            <div className="container mt-2 mb-2">
                <h2 className="p-2 mt-2 mb-2"><b>Our Teachers</b></h2>
                <div className="row">
                    {
                        teachers.map(teacher=><TeachersCard 
                            key={teacher.key}
                            teacher={teacher}
                        ></TeachersCard>)
                    }
           
                </div>
            </div>
        </div>
    );
};

export default Teachers;