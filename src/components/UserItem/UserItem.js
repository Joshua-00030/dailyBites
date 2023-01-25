import './UserItem.css';

const UserItem = ({item}) => {
    return (
        <div className="UserItem">
            <p>{item.name}</p>
            <p>{item.calories}</p>
        </div>
    )
  }
  
  export default UserItem