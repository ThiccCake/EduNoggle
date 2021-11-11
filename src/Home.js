import React from 'react';
import Card from './Card';
import Slider from './Slider';
import { useState, useEffect } from 'react';

const Home = () => {
    //set state
    const [card, setCard] = useState([]);
    //set effect
    useEffect(() => {
        fetch('./facilities.json')
            .then(res=>res.json())
            .then(data=>setCard(data));
    }, []);

    return (
        <div>
            <Slider></Slider>
            <div className="container mt-2 mb-2">
                <h2 className="p-2 mt-2 mb-2"><b>What we offer</b></h2>
                <div className="row">
                    {
                        card.map(student=><Card 
                            key={student.key}
                            student={student}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;