import UserItem from '../UserItem/UserItem'
import './ItemContainer.css';

const ItemContainer = ({items}) => {
    return (
        <div className="item-grid-container">
            <div className="entry-cards">
            {items.map((item) => <UserItem key={item.id} item={item}></UserItem>)}
            </div>
        </div>
    )
}

export default ItemContainer