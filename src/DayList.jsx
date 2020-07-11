import React from 'react'
import DayItem from './DayItem'

const DayList = ({days, deleteDay}) => {
    return (
        <ul className={'day-ul'}>
            {
                days.map(day => {
                    return(
                        <DayItem 
                            content={day.content}
                            key={day.id}
                            deleteDay={deleteDay}
                            id={day.id}
                        />
                    )
                })
            }
        </ul>
    )
}

export default DayList