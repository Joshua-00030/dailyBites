import './UserItem.css';

const UserItem = ({item, onClick}) => {
    return (
        <div className="card-hover-border">
        <div className="card" onClick={onClick}>
            <div className="header">{item.name}</div>
            <div className="body">{item.calories}</div>
        </div>
        </div>
    )
  }
  
  export default UserItem
