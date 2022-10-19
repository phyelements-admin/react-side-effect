import React from 'react';
import { useEffect, useState } from 'react';

function Component1(props) {
    const [bit, setBit] = useState(0);
    const onClickHandler = ()=>{
        setBit(1);
    }
    return (
        <div>
          <h1>Welcome to Component1 </h1>
          <button onClick={onClickHandler}>Component1 Children</button>
          {bit==1 &&
            
          <h1>{props.children}</h1>
                  
          }
          
        </div>
    );
}

export default Component1;