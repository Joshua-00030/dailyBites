import './Log.css';
import CalorieBar from '../CalorieBar/CalorieBar';
import Tagbar from '../Tagbar/Tagbar';
import ItemContainer from '../ItemContainer/ItemContainer';
import Searchbar from '../Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import userItemService from '../../services/userItem';
import userService from '../../services/users';

const Log = (props) => {

    const [currentCals, setCurrentCals] = useState(0)
    const [totalCals, setTotalCals] = useState(0)
    const [userItems, setUserItems] = useState([])
    const [todaysItems, setTodaysItems] = useState([])
    const [activeTags, setActiveTags] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [favoriteTags, setFavoriteTags] = useState([]);
    const [isAddItem, setIsAddItem] = useState(false);
    const [editMode, setEditMode] = useState(false)

    const toggleIsAddItem = () => {
        setIsAddItem(!isAddItem)
    }

    const setTagBar = (items) => {
       setFavoriteTags([...new Set(items.flatMap(item => item.tags))])
    }

    useEffect(() => {
        if(userItemService.token)
        userItemService.setToken(props.user.token)
        userItemService
            .getAll()
            .then(initialItems => {
                setUserItems(initialItems);
                setTagBar(initialItems);
                setFilteredItems(initialItems);
            })
            userService.setToken(props.user.token)
            userService.getCalorieTotal(props.user.username).then(res => {
                setTotalCals(res)
            })
            
        const sdate = new Date()
        sdate.setHours(0,0,0,0)
        const edate = new Date()
        edate.setHours(23, 59, 59, 999)
        userService.getHistory({sdate:new Date(sdate), edate:new Date(edate)})
        .then(newItems => {
            setTodaysItems(newItems)
            var total = 0
            //cals should always be index 0. may need to look at if that changes
            newItems.map((item) =>
                total += item.nutrition[0].value
            )
            setCurrentCals(total)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAddItem, currentCals])

    const handleCheck = () => {
        setEditMode(!editMode)
    }

    return (
        <>
            <div className="log-container">
                <Searchbar toggleIsAddItem={toggleIsAddItem} items={userItems} setIsAddItem={setIsAddItem}
                 setFilteredItems={setFilteredItems} filteredItems={filteredItems} activeTags={activeTags} user={props.user} handleCheck={handleCheck} />
                <Tagbar favoriteTags={favoriteTags} activeTags={activeTags} setActiveTags={setActiveTags} />
                <ItemContainer items={filteredItems} currentCals={currentCals} setCurrentCals={setCurrentCals} token={props.user.token} handleCheck={handleCheck} user={props.user} checked={editMode} toggleIsAddItem={toggleIsAddItem}/>
                <CalorieBar currentCals={currentCals} todaysItems={todaysItems} setCurrentCals={setCurrentCals} totalCals={totalCals}/>
            </div>
        </>
    )
}

export default Log