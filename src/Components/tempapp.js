import React from "react";
import "./css/style.css";
const Tempapp = () =>{

    return(
    

        <>
            <div className="box">

                <div className="inputData">
                    <input type="seatch"
                     className="inputField"
                     onChange={(event)=>{
                        
                     }}     
                     />
                </div>

            
        


            <div className="info">
                <h2 className="location">
                <i class="fa-solid fa-street-view"></i>
                </h2>
                <h1 className="temp">  
                23 degree
                 </h1>

                 <h3 className="temp_min_max">
                        min\\max
                 </h3>
            </div>

            </div>
        </>

    );


}

export default Tempapp;