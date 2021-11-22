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



const Teachers = () => {



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
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Pre-school <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                    </h1>
            </div>

            <div>
                {/* <Link to={"/HistoryCourse" } style={{textDecoration:"none"}}> */}
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Elementary <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                    </h1>
            </div>

            <div>
                {/* <Link to={"/HistoryCourse" } style={{textDecoration:"none"}}> */}
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Highschool <FontAwesomeIcon icon ={faArrowAltCircleRight}></FontAwesomeIcon>
                    </h1>
            </div>
        
        </div>
    );
};

export default Teachers;