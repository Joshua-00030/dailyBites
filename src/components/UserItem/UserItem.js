import './UserItem.css';

const UserItem = ({item, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="header">{item.name}</div>
            <div className="body">{item.calories}</div>
        </div>
    )
  }
  
  export default UserItem
