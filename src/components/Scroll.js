import React from 'react';

const Scroll = (props) => {
    return (
        <div className='scroll' style={{ overflowY: 'scroll', border: '1px solid black', height: '80vh' }}>
            {props.children}
        </div>
    )
}

export default Scroll;