import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('     Nooo');
    // }
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;