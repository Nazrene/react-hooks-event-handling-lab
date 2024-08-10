import React from "react";

function Keypad (){
    const handleInputChange =() => {
        console.log("Entering password...");
     };
    return (
        <div className="keypad">
            < input 
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            />
            </div>
            );
        }
        export default Keypad;