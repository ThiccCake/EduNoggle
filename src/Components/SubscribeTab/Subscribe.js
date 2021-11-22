import React from 'react';
import { useState, useEffect } from "react";

// import Subscriptions from "../Subscriptions/Subscriptions"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import Subscriptions from '../Subscriptions/Subscriptions';

const Subscribe = () => {
    const [Subdata, setSubdata] = useState([]);

    useEffect(() => {
        fetch("./FakeSub.JSON")
        .then(res=>res.json())
        .then(data=>setSubdata(data))
    }, [])
    const handler=()=>{
        window.location.reload();
        // history.push("/services")
        console.log("here")
    }
    return (
        <div className="bg-info" style={{marginTop:"130px"}}>
            <div>
                {/* <Link to={"/MathematicsCourse" } style={{textDecoration:"none"}}> */}
                    <h1 className="border p-4 text-dark fw-bolder mt-5 p-5 ">Subscription Types</h1>
                {/* </Link> */}
                <div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">{
                        Subdata.map(item=><Subscriptions
                        key={item.id}
                        sub={item}
                        ></Subscriptions>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;