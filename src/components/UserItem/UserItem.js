import './UserItem.css';
import NewModal from '../NewModal/NewModal';
import { useState } from 'react';
const UserItem = ({item, onClick, checked, user}) => {
    
    const [edit, setEdit] = useState(false);
    const handleClick = () =>{
    if(checked){
        setEdit(!edit)
    }
    else{
        onClick()
    }

    }
    return (
        <>
        <div className="card-hover-border">
            <div className="card" onClick={handleClick}>
                <div className="header">{item.name}</div>
                <div className="body">{item.nutrition[0].value}</div>
            </div>
        </div>
        
        <NewModal toggleIsAddItem={handleClick} user={user} mode={2} edit={edit}/>
        </>
    )
  }
  
  export default UserItem
