import './UserItem.css';
import NewModal from '../NewModal/NewModal';
import { useState } from 'react';
const UserItem = ({ item, onClick, checked, user, toggleIsAddItem }) => {

    const editText = "Edit " + item.name
    const addText = "Add " + item.name
    const [edit, setEdit] = useState(false);
    const [open, setopen] = useState(false);
    const handleClick = () => {
        setopen(true)
        if (checked) {
            setEdit(!edit)
        }
        else {
            onClick()
        }

    }
    return (
        <>
                <div className={checked ? (window.innerWidth > 500 ? 'card cardEdit' : 'mobile-card cardEdit')
                 : (window.innerWidth > 500 ? 'card' : 'mobile-card')} title={checked ? editText : addText} onClick={handleClick}>
                   <div className="header">{item.name}</div>
                    <div className="body">{item.nutrition[0] ? item.nutrition[0].value : 0}</div>
                </div>
            {open && <NewModal toggleIsAddItem={toggleIsAddItem} user={user} mode={2} edit={edit} item={item} editHandleClick={handleClick} />}
        </>
    )
}

export default UserItem
