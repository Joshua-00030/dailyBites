import UserItem from "./UserItem"

const ItemContainer = () => {
    const exampleItems = [{name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}, {name:'Oatmeal', calories:150, tags:['breakfast', 'low cal']}, {name:'hamburger', calories:350, tags:['lunch']}]
    //using example items create UserItem components for each item.
    //assign this returned list op items to the variable items and display it in the html. explodes to show contained items
    const items = exampleItems.map((item) => <UserItem item={item}></UserItem>)
    //CSS for clever 4 item per row with max size flex: https://stackoverflow.com/questions/29546550/flexbox-4-items-per-row
    return (
        <div className="ItemContainer">
            {items}
        </div>
    )
  }
  
  export default ItemContainer