import React from 'react'

const FishItem = ({content, deleteFish, id}) => {

    const handleDelete = () => {
        deleteFish(id)
    }

    return (
        <li className={'fish-list'}>
            <span className={'fish-content'}>{content}</span>
            <button 
                className={'fish-delete'}
                onClick={handleDelete}
            >
                削除
            </button>
        </li>
    )
}

export default FishItem