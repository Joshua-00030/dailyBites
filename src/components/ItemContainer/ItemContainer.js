import React, { useEffect } from 'react';
import UserItem from '../UserItem/UserItem'
import './ItemContainer.css';


const ItemContainer = ({items, currentCals, setCurrentCals}) => {

    function handleClick(item){
        
        const { name, nutrition } = item;
        const calories = nutrition.find((nutrient) => nutrient.name === 'calories')?.value;
        setCurrentCals(prevCalories => prevCalories + calories)
        console.log(`Item ${name} has been clicked!\nThis food has ${calories} calories.`);
    }

    useEffect(() => {
        console.log(`Current Calory Total is: ${currentCals} `);
    }, [currentCals]);
    
    return (
        <div className="item-grid-container">
            <div className="entry-cards">
                {items.map((item) => 
                    <UserItem  
                        key={item.id} 
                        item={item}
                        onClick={() => handleClick(item)}>
                    </UserItem>)}
            </div>
        </div>
    )
}

export default ItemContainer