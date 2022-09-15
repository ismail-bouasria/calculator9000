import * as React from 'react';
import '../index.css'
const OperationData = ['+','-','*','/'];
const numberlist = [];

function GreatOperationNumberButton() {
   
  return (
    <div className='flex flex-col'>
      <button className='bg-orange-400  m-0.5 text-white w-14 h-14'> + </button>
      <button className='bg-orange-400  m-0.5 text-white w-14 h-14'> - </button>
      <button className='bg-orange-400  m-0.5 text-white  w-14 h-14'> * </button>
      <button className='bg-orange-400  m-0.5 text-white w-14 h-14'> / </button>

    </div>
   
 
  );
}

export default  GreatOperationNumberButton;
    