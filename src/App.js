import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import {  useGlobalContext } from './context'

function App() {
  const {handleSubmit, name, setName, list, isEditing, showAlert, clearList} = useGlobalContext()

  

 
  return (
  <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert  />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" value={name}
          className='grocery'
          placeholder='e.g eggs'
          onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>

        </div>
      </form>
      {list.length > 0 &&
        <div className="grocery-container">
        <List /> 
        <button className='clear-btn' onClick={clearList} > Clear Items</button>
    </div>
}
        
  </section>)
}

export default App
