import UserItem from '../UserItem/UserItem'
import './ItemContainer.css';

const ItemContainer = ({items, currentCals, setCurrentCals}) => {

    function handleClick(name, value){
        setCurrentCals(prevCalories => prevCalories + value)
        console.log("Item " + name + " has been clicked!\nThis food has " + value + " calories.");
        console.log("Current Calory Total is: " + (currentCals + value));
    }

    return (
        <div className="item-grid-container">
            <div className="entry-cards">
                {items.map((item) => 
                    <UserItem  
                        key={item.id} 
                        item={item}
                        onClick={() => handleClick(item.name, item.calories)}>
                </UserItem>)}
            </div>
        </div>
    )
}

export default ItemContainer