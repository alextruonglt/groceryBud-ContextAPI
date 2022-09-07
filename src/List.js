import React, {useContext} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import {  useGlobalContext } from './context'

const List = () => {

  const {list, editItem, removeItem} = useGlobalContext() 
    

  const itemsEl = list.map((item) =>{
    const {id, title} = item 
    return <article key={id} className="grocery-item">
      <p className='title'>{title}</p>
      <div className="btn-container">
        <button type='button' className='edit-btn' onClick={() => editItem(id)}><FaEdit/></button>
        <button type='button' className='delete-btn' onClick={() => removeItem(id)}><FaTrash/></button>
      </div>
    </article>
  })

  return (
    <div className="grocery-list">
        {itemsEl}
    </div>
  )
}

export default List
