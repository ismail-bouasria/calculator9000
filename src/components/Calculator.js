
import * as React from 'react';
import BeautifulScreen from './BeautifulScreen';
import Place from './Place';



function Calculator() {
   
  return (
    <div className=' bg-black w-80 flex flex-col mt-5 border-solid border-2 rounded-md border-gray-400 '>
      <BeautifulScreen/>
      <Place/>
 
    </div>
 
  );
}

export default Calculator;
