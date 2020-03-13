import React from 'react';

const Player = (props) => {
    
    return (        
        <div>
          <div>
            {props.name}
          </div>                   
          <div>
            {props.country}
          </div>         
        </div> 
    );
}

export default Player;