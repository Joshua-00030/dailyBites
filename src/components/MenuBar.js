const MenuBar = () => {
    return (
        <div className="MenuBar">
            <button className="MenuButton" onClick={()=> console.log('hello')}>Button</button>
            <button className="MenuButton">Button</button>
            <div>
                <h1>Daily Bites</h1>
            </div>
            <button className="MenuButton">Button</button>
        </div>
    )
  }
  
  export default MenuBar