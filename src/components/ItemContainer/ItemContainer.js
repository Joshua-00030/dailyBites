import UserItem from '../UserItem/UserItem'
import './ItemContainer.css';
import userService from '../../services/users';

const ItemContainer = ({ items, currentCals, setCurrentCals, token }) => {

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
                        onClick={() => handleClick(item)} />
                )}
            </div>
        </div>
    )
}

export default ItemContainer