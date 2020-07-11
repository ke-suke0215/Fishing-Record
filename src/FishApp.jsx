import React, {useState} from 'react'
import FishForm from './FishForm'
import FishList from './FishList'
import shortid from 'shortid'

const FishApp = () => {
    const [someFish, setSomeFish] = useState([])

    const addFish = content => {
        setSomeFish([
            ...someFish,
            {
                content: content,
                id: shortid.generate()
            }
        ])
    }
     const deleteFish = id => {
         setSomeFish(someFish.filter(fish => fish.id !== id))
     }

    

    return (
        <div className={'fish-wrap'}>
            <div className={'fish-min-wrap'}>
                <FishForm addFish={addFish}/>
                <FishList 
                   deleteFish={deleteFish}
                   someFish={someFish}/>
            </div>
        </div>
    )
}

export default FishApp