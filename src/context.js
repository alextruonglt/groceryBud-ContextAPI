import React, {useState, useContext, useEffect} from "react";


const AppContext = React.createContext()

const getLocalStorage = () =>{
    let list = localStorage.getItem("list")
  
    if(list){
      return JSON.parse(list)
    } else{
      return []
    }
  }

const AppProvider = ({children}) =>{
    const [name, setName] = useState("")
    const [list, setList] = useState(getLocalStorage())
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({show:false, msg: "", type: ""})
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name){
          //display alert
          showAlert(true, "danger", "please enter value")
        } else if(name && isEditing ){
            setList(list.map((item) => {
              if(item.id === editId){
                return {...item, title:name}
              }
              return item
            }))
            setName("")
            setEditId(null)
            setIsEditing(false)
            showAlert(true, "success", "value changed")
        }else{
          showAlert(true, "success", "Item added")
          const newItem = {id: new Date().getTime().toString(), title:name}
          setList([...list, newItem])
          setName("")
        }
      }
    
  
  
    const showAlert = (show= false, type="", msg="") => {
      setAlert({show,type, msg})
    }
  
    const clearList = () =>{
      showAlert(true, "success", "Empty List")
      setList("")
    }
  
    const removeItem = (id) =>{
      showAlert(true, "danger", "item removed")
      setList(list.filter((item) =>{
        return item.id !== id 
      }))
    }
  
    const editItem = (id) =>{
      const specificItem = list.find((item) =>{
       return item.id === id
      })
      setIsEditing(true)
      setEditId(id)
      setName(specificItem.title)
    }
  
    useEffect(() =>{
      localStorage.setItem("list", JSON.stringify(list))
    },[list])
  



    return <AppContext.Provider value={
        {list,
        name,
        list,
        isEditing,
        editId,
        alert,
        setName,
        editItem,
        removeItem,
        showAlert,
        handleSubmit,
        clearList
    }
    }>{children}</AppContext.Provider>
}

//custom hook

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}