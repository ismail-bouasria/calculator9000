import * as React from 'react';



function BeautifulScreen(props) {
  return (
    <div>
      
   <p className='h-24  flex items-end justify-end text-white rounded-t bg-neutral-800'> <span className='m-3 text-5xl'> {props.screenState.num} </span> </p>

    
 
    </div>
 
  );
}

export default BeautifulScreen;