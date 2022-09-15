import * as React from 'react';
import '../index.css'
const OperationData = ['+','-','*','/'];
const numberlist = [];

function MagnificientEqualButton() {
   
  return (
    <div className='flex flex-col'>
      <button className='bg-orange-500  m-0.5 text-white w-22 h-14'> = </button>

    </div>
   
 
  );
}

export default  MagnificientEqualButton;