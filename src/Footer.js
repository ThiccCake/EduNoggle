import React from 'react';

const Footer = () => {
    return ( 
            <div className="container">
                <div className="jumbotron bg-dark text-light p-3">
                    <div className="row">
                        <div className="col-sm-4">
                            <h5 className="text-warning">About Us</h5>
                            <p>
                             EduNoggle is the best.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Link</ol>
                                <ol>Home</ol>
                                <ol>About</ol>
                                <ol>Students</ol>
                                <ol>Subjects</ol>
                                <ol>Contact</ol>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Others</ol>
                                <ol>Support</ol>
                                <ol>Privacy</ol>
                                <ol>Contact</ol>
                                <ol>Help</ol>
                            </ul>
                        </div>
                    </div>  
                    <hr/>
                    <p>© Copyright EduNoggle 2021 . All Rights Reserved </p>            
                </div> 
                
            </div>
       
    );
};

export default Footer;