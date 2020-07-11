import React, {useState} from 'react'
import FishApp from'./FishApp'

const DayItem = ({content, deleteDay, id}) => {

    const handleDelete = () => {
        deleteDay(id)
    }

    return(
        <li className={'day-list'}>
            <div className={'day-wrap'}>
                <div className={'day-min-wrap'}>
                    <span className={'day-content'}>
                        {content}
                    </span>
                    <button 
                        onClick={handleDelete}
                        className={'day-delete'}
                        >
                        削除
                    </button>
                </div>
            </div>
            <FishApp/>
        </li>
    )
}


export default DayItem