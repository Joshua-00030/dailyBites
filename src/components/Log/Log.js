import './Log.css';
import CalorieBar from '../CalorieBar/CalorieBar';
import Tagbar from '../Tagbar/Tagbar';
import ItemContainer from '../ItemContainer/ItemContainer';
import Searchbar from '../Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import userItemService from '../../services/userItem';
import userService from '../../services/users';
/*
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
*/

const Log = (props) => {

    const [currentCals, setCurrentCals] = useState(0)
    const [userItems, setUserItems] = useState([])
    const [todaysItems, setTodaysItems] = useState([])
    const [activeTags, setActiveTags] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [favoriteTags, setFavoriteTags] = useState([]);
    const [isAddItem, setIsAddItem] = useState(false);

    const toggleIsAddItem = () => {
        setIsAddItem(!isAddItem);
    }

    const setTagBar = (items) => {

        let tag_array = [];
        let tag_dict = [];
        let count = 0;
        let i = 0;
        let j = 0;
        let x = 0;
        
        for (i = 0; i < items.length; i++) {
            for (j = 0; j < items[i].tags.length; j++) {
                if (!(tag_dict.includes(items[i].tags[j])) 
                && !(favoriteTags.includes(items[i].tags[j])))
                    tag_dict[count] = items[i].tags[j];
                count++;
            }
        }

        for (x = 0; x < count; x++) {
            if(tag_dict[x]){
                tag_array.push(tag_dict[x]);
            }
        }
        setFavoriteTags(favoriteTags.concat(tag_array));
    }

    useEffect(() => {
        userItemService.setToken(props.user.token)
        userItemService
            .getAll()
            .then(initialItems => {
                setUserItems(initialItems);
                setTagBar(initialItems);
                setFilteredItems(initialItems);
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
    }, [isAddItem])

    return (
        <>
            <div className="log-container">
                <Searchbar toggleIsAddItem={toggleIsAddItem} items={userItems} setIsAddItem={setIsAddItem} setFilteredItems={setFilteredItems} filteredItems={filteredItems} activeTags={activeTags} />
                <Tagbar favoriteTags={favoriteTags} activeTags={activeTags} setActiveTags={setActiveTags} />
                <ItemContainer items={filteredItems} currentCals={currentCals} setCurrentCals={setCurrentCals} token={props.user.token} />
                <CalorieBar currentCals={currentCals} />
            </div>
        </>
    )
}

export default Log