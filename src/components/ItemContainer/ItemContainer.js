import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect } from 'react';
import UserItem from '../UserItem/UserItem'
import './ItemContainer.css';
import userService from '../../services/users';
import NewModal from '../NewModal/NewModal';

const ItemContainer = ({ items, currentCals, setCurrentCals, token, handleCheck, checked, user, toggleIsAddItem }) => {

    const handleClick = async (item) => {
        await userService.setToken(token)
        setCurrentCals(Cals => Cals + item.nutrition[0].value)
        console.log("Item " + item.name + " has been clicked!\nThis food has " + item.nutrition[0].value + " calories.");
        console.log("Current Calory Total is: " + (currentCals + item.nutrition[0].value));
        const eatenItem = { id: item.id, date: new Date()}
        userService.addItemToHistory(eatenItem)
    }

    return (
        <div className="item-grid-container">
            <div className="entry-cards">
                {items.map((item) =>
                    <UserItem
                        key={item.id}
                        item={item}
                        onClick={() => handleClick(item)}
                        handleCheck={handleCheck}
                        user={user}
                        checked={checked}
                        toggleIsAddItem={toggleIsAddItem} />
                )}
            </div>
        </div>
    )
}

export default ItemContainer