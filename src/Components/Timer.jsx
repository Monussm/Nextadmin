import React from "react";
import Footer from "./Footer";
const Timer=()=>
{
    return<>
    <div className="container-expand-lg">
        <div className="container">
            <h3 className="text-center mt-5">Your college Essay</h3>
            <p className="text-center">Our AI-powered algorithm will provide instant feedback on your piece</p>
            <textarea rows="15" cols="105"></textarea>
            <a className="Get-started mx-auto mb-3" href="#">Sumbit</a>
        </div>
        <Footer />

    </div>
    
    
    
    
    
    </>




}
export default Timer;