import React, {useState} from 'react'

const FishForm = ({addFish}) => {
    const [value, setValue] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()

        if(value===''){
            alert('空です')
        } else {
            addFish(value)
            setValue('')
        }
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className={'fish-form'}    
            >
            <input 
                className={'fish-input'}    
                type='text' 
                onChange={e => {
                    setValue(e.target.value)
                }}
                value={value}
                placeholder="Input the Fish Name"
            />
        </form>
    )
}

export default FishForm