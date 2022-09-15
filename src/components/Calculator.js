
import React, { useEffect, useState } from "react";
import BeautifulScreen from './BeautifulScreen';
import AmazingNumberButton from './AmazingNumberButton';

import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationNumberButton from './GreatOperationButton';


function Calculator() {

  // Creation d'un état 
  const [screenState, setScreenState] = useState({
    num: 0,
    operation: "",
    results: "",
    total: 0,
  })
  // Event recuperant les nombres 
  const handleNumber = (number) => {

    if (screenState.num === 0) {
      setScreenState({
        ...screenState, num: number, operator: ""
      });
    } else {
      setScreenState({
        ...screenState,
        num: screenState.num.toString() + number.toString(),
      });
    }


    // Event recuperant les opérateurs 

    const handleOperation = () => {

    }



    // Propriété pour le composant AmazingButton
    var numberData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 'AC'];
    var numberList = numberData.map(function (number, index) {
      return <AmazingNumberButton key={index} number={number} handleNumberParent={handleNumber} />;
    });

    // Propriété pour le composant OperationButton
    var operationData = ['+', '-', '*', '/', 'Save'];
    var operationList = operationData.map(function (operation, index) {

      return <GreatOperationNumberButton key={index} operationButton={operation} />
    });




    return (
      <div className=' bg-black w-96 flex flex-col mt-5 border-solid border-2 rounded-md border-gray-400 '>
        <BeautifulScreen screenState={screenState} handleNumberParent={handleNumber} />
        <div className='flex flex-row justify-center flex-wrap w-76'>
          {numberList}
          {operationList}
        </div>

        <MagnificientEqualButton />


      </div>

    );
  }

  export default Calculator;
