import React, { useState } from 'react'

const DayForm = ({addDay}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(value==='') {
            alert('空です')
        }else{
            addDay(value)
            setValue('')
        }
    }
    
    return(
        <form 
            onSubmit={handleSubmit}
            className={'day-form'}    
        >
            <input 
            className={'day-input'}
                value={value}
                type="text"
                placeholder="20XX/XX/XX"
                onChange={e =>{
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default DayForm