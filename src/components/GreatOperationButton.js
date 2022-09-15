import * as React from 'react';



function GreatOperationNumberButton(props) {
 
  return (
    <div className='flex flex-col'>
      <button   className='bg-blue-500 hover:bg-blue-400 m-0.5 text-white w-14 h-14'>{props.operationButton}</button>
    </div>
  );
}

export default  GreatOperationNumberButton;
    