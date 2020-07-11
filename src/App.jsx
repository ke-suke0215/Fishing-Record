import React, { useState } from 'react'
import DayForm from './DayForm'
import DayList from './DayList'
import shortid from 'shortid'

const App = () => {
    const [days, setDays] = useState([])

    const addDay = content => {
        setDays([
            { 
                content: content,
                id: shortid.generate()
            },
            ...days
        ])
    }

    const deleteDay = id => {
        setDays(days.filter(day => day.id !== id))
    }
    
    return (
        <>
            <DayForm
                addDay={addDay}
            />
            <DayList 
                deleteDay={deleteDay}
                days={days}
            />
        </>
    )
}

export default App