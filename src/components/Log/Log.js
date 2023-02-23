import './Log.css';
import CalorieBar from '../CalorieBar/CalorieBar';
import Tagbar from '../Tagbar/Tagbar';
import ItemContainer from '../ItemContainer/ItemContainer';
import Searchbar from '../Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import userItemService from '../../services/userItem';

const exampleItems = [
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 1 }, 
    { name: 'oatmeal', calories: 150, tags: ['breakfast', 'low cal'], id: 2 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 3 }, 
    { name: 'oatmeal', calories: 150, tags: ['breakfast', 'low cal'], id: 4 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 5 }, 
    { name: 'oatmeal', calories: 150, tags: ['breakfast', 'low cal'], id: 6 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 7 }, 
    { name: 'oatmeal', calories: 150, tags: ['breakfast', 'low cal'], id: 8 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 9 }, 
    { name: 'oatmeal', calories: 150, tags: ['breakfast', 'low cal'], id: 10 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 11 }, 
    { name: 'oatmeal', calories: 150, tags: ['breakfast', 'low cal'], id: 12 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 13 }, 
    { name: 'brown sugar oatmeal', calories: 150, tags: ['breakfast', 'low cal', 'oatmeal'], id: 14 }, 
    { name: 'hamburger', calories: 350, tags: ['lunch'], id: 15 }
]

const Log = (props) => {

    const [currentCals, setCurrentCals] = useState(0)
    const [userItems, setUserItems] = useState([])
    const [filteredItems, setFilteredItems] = useState(exampleItems)

    useEffect(() => {
        userItemService.setToken(props.user.token)
        userItemService
            .getAll()
            .then(initialItems => {
                setUserItems(initialItems)
            })
    }, [props])

    const [activeTags, setActiveTags] = useState([]);

    return (
        <>
            <div className="log-container">
                <Searchbar items={exampleItems} setFilteredItems={setFilteredItems} filteredItems={filteredItems} activeTags={activeTags}/>
                <Tagbar activeTags={activeTags} setActiveTags={setActiveTags}/>
                <ItemContainer items={filteredItems} currentCals={currentCals} setCurrentCals={setCurrentCals}/>
                <CalorieBar currentCals={currentCals}/>
            </div>
        </>
    )
}

export default Log