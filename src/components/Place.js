import * as React from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationNumberButton from './GreatOperationButton';


const numberData = [1,2,3,4,5,6,7,8,9];
const numberlist = [];

function Place() {
   
  return (
    <div className='flex justify-center'>
        <AmazingNumberButton/>
        <GreatOperationNumberButton/>
     
    </div>
 

  );
}

export default Place;