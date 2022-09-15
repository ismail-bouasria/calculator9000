
import { React } from 'react';
import Calculator from './components/Calculator';
import TheTitle from './components/TheTitle';


function App() {
  return (
    <div className='flex flex-col margin justify-center items-center h-96  '>
      
    <TheTitle/>
    <Calculator/>
 
    </div>
 
  );
}

export default App;
