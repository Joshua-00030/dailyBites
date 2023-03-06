import './Log.css';
import CalorieBar from '../CalorieBar/CalorieBar';
import Tagbar from '../Tagbar/Tagbar';
import ItemContainer from '../ItemContainer/ItemContainer';
import Searchbar from '../Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import userItemService from '../../services/userItem';

const Log = (props) => {

    const [currentCals, setCurrentCals] = useState(0)
    const [userItems, setUserItems] = useState([])
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAddItem])

    return (
        <>
            <div className="log-container">
                <Searchbar toggleIsAddItem={toggleIsAddItem} items={userItems} setIsAddItem={setIsAddItem} setFilteredItems={setFilteredItems} filteredItems={filteredItems} activeTags={activeTags} />
                <Tagbar favoriteTags={favoriteTags} activeTags={activeTags} setActiveTags={setActiveTags} />
                <ItemContainer items={filteredItems} currentCals={currentCals} setCurrentCals={setCurrentCals} />
                <CalorieBar currentCals={currentCals} />
            </div>
        </>
    )
}

export default Log