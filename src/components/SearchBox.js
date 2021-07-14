import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='p2'>
            <input 
                className='pa3 ma2 ba br2 b--green bg-lightest-blue'
                type='search' 
                placeholder='Search robots' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;