import * as React from 'react';
import GreatOperationNumberButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

const numberData = [0,1,2,3,4,5,6,7,8,9];
const numberlist = [];

function AmazingNumberButton() {
   
  return (
    <div className="w-80">
      <button className='bg-gray-500 m-0.5 text-white w-14 h-14'> 9 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 8 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 7 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 6 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 5 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 4 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 3 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 2 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 1 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> 0 </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> , </button>
      <button className='bg-gray-700 m-0.5 text-white w-14 h-14'> % </button>
      <MagnificientEqualButton/>
    </div>
 

  );
}

export default AmazingNumberButton;