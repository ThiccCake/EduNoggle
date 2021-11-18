import "./Title.css"
import "animate.css"

import React from 'react';

import logo from "../../Images/7.jpg"
import { useHistory } from "react-router";

const Title = () => {

    const history = useHistory();

    const handleClick = (link) => {
        history.push(link);
    }
// ---------------------------------------header title-------------------------------------------
    return (
        <>
        <div className="mb-5 mt-5" >
                   
                
                    <div className="d-lg-flex  align-items-baseline justify-content-around "style={{marginTop:"150px"}}>
                               <div>
                               <div className="header ">
                               {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}
                                        <h1  className="Title animate__animated animate__heartBeat" > <span className="thumb " >Access </span>  to world class education</h1>
                                    </div>
                                    <div>
                                        <p className="p-2 text-center"><small> Welcome to our Subscription Consulting service </small></p>
                                    </div>
                                    {/* <Butto variant="text">Text</Butto> */}

                                    <div className="text-center mb-5">
                                    <button type="button" style={{borderRadius:"10px"}} className="btn btn-danger me-3 fs-3 px-4 " onClick={()=>handleClick("/student")}>Sign up</button>
                                    {/* <button type="button" onClick={()=>handleClick("/services")} style={{borderRadius:"10px"}}  className="btn btn-secondary fs-3 px-4">For school districts</button> */}
                                </div>
                               </div>



                               <div className="text-center" >
                                    <img className="img-fluid rounded-circle"   src={logo} alt="" />

                                </div>
               

                </div>
                
              
                </div>
                
            
            <hr />
 
       
            
        </>
    );
};

export default Title;