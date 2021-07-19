import React from 'react';

const Scroll =(probs) =>{
    return (
        <div style={{overflowY:'scroll',border:'3px solid green',height:'700px'}}>
            {probs.children}
        </div>
    )
}

export default Scroll;