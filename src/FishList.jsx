import React from 'react'
import FishItem from './FishItem'
 
const FishList = ({someFish, deleteFish}) => {
    return (
        <ul className={'fish-ul'}>
            {
                someFish.map(fish => {
                    return (
                        <FishItem 
                            content={fish.content} 
                            key={fish.id}
                            deleteFish={deleteFish}
                            id={fish.id}
                        />
                    )
                })
            }
        </ul>
    )
}

export default FishList