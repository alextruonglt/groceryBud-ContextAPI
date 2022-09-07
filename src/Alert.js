import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Alert = () => {

  const {alert , removeAlert, list} = useGlobalContext()
  const {type, msg} = alert


  useEffect(() =>{
    const timeout = setTimeout(() =>{
        removeAlert()
    },3000)

    return () => clearTimeout(timeout)

  },[list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
