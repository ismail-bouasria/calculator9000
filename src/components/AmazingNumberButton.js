import React, { useState } from "react";




function AmazingNumberButton(props) {

// fonction recuperant les nombres
 
   var handleNumber=()=> {
      
     props.handleNumberParent(props.number);

  };

  return (
    <div className="flex flex-row ">
    <button  onClick={ () => handleNumber() } className='bg-gray-500 hover:bg-gray-400 m-0.5 text-white w-14 h-14'> {props.number} </button>
      
    </div>
 

  );
}

export default AmazingNumberButton;