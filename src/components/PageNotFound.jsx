import React from "react";
import { Image} from "react-bootstrap";

export default function PageNotFound() {
    return(
        <>
            <div className="d-flex justify-content-center container">
                <div className="row">
            <div className="alert alert-warning w-100 d-flex  justify-content-center mt-5">
                Oops! Page not found 404 .
            </div>
            <Image className="mx-5" style={{width:"550px"}} src={require("../Assets/Images/undraw_warning_cyit.png")}/>
                    
                </div>
            </div>
        </>
    );
    
}