import "./Services.css"

import React from 'react';
import { useState, useEffect } from "react";

import Body from "../Body/Body";

import Math from "../Math/Math";
import History from "../History/History";
import Biology from "../Biology/Biology";
import English from "../English/English";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Services = () => {
    const [Mathdata, setMathdata] = useState([]);
    const [BioData, setBioData] = useState([]);
    const [Histdata, setHistData] = useState([]);
    const [Engdata, setEngData] = useState([]);
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("./FakeData.JSON")
        .then(res=>res.json())
        .then(data=>setdata(data))
    }, [])
    useEffect(() => {
        fetch("./FakeMath.JSON")
        .then(res=>res.json())
        .then(data=>setMathdata(data))
    }, [])
    useEffect(() => {
        fetch("./FakeHistory.JSON")
        .then(res=>res.json())
        .then(data=>setHistData(data))
    }, [])
    useEffect(() => {
        fetch("./FakeBiology.JSON")
        .then(res=>res.json())
        .then(data=>setBioData(data))
    }, [])
    useEffect(() => {
        fetch("./FakeEnglish.JSON")
        .then(res=>res.json())
        .then(data=>setEngData(data))
    }, [])
    const handler=()=>{
        window.location.reload();
        // history.push("/services")
        console.log("here")
    }
    return (
        <div className="bg-info" style={{marginTop:"130px"}}>
                 {/* <button type="button" onClick={handler} className="btn btn-secondary mt-5 mb-5"> <Link to={"/services"}> <h1 className="border  fw-bolder text-dark">WebDevelopment Course<button type="button" class="btn btn-secondary"><FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon></button>
 
               </h1></Link></button> */}

            {/* <NavLink to="/" style={{textDecoration:"none"}} >
                <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Courses<FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon></h1>
            </NavLink>

            <div>
                <div class="row g-4">{
                        data.map(item=><Body
                            key={item.id}
                            item={item}  
                        ></Body>)
                    }
                </div>
            </div> */}
            <div>
                {/* <Link to={"/MathematicsCourse" } style={{textDecoration:"none"}}> */}
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Mathematics <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                    </h1>
                {/* </Link> */}
                <div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">{
                        Mathdata.map(item=><Math
                        key={item.id}
                        math={item}
                        ></Math>)
                    }
                    </div>
                </div>
            </div>
            <div>
                {/* <Link to={"/HistoryCourse" } style={{textDecoration:"none"}}> */}
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">History <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                    </h1>
                {/* </Link> */}
                <div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">{
                        Histdata.map(item=><History
                        key={item.id}
                        hist={item}
                        ></History>)
                    }
                    </div>
                </div>
            </div>
            <div>
                <h1 className="border p-4 bg-Secondary fw-bolder mt-5 p-5">Biology <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                </h1>
                <div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">{
                        BioData.map(item=><Biology
                        key={item.id}
                        bio={item}
                        ></Biology>)
                    }
                    </div>
                </div>
            </div>
            <div>
                {/* <Link to={"/HistoryCourse" } style={{textDecoration:"none"}}> */}
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">English <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                    </h1>
                {/* </Link> */}
                <div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">{
                        Engdata.map(item=><English
                        key={item.id}
                        eng={item}
                        ></English>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;