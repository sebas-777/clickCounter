import React from "react";
import '../styleSheets/Counter.css'

function Counter({numClics}) { 

  return(

    <div className='counter'>
      { numClics }
    </div>
  );
    
}

export default Counter;