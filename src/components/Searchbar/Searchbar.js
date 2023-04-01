import './Searchbar.css'
import { useEffect, useState } from 'react';
import NewModal from '../NewModal/NewModal';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ items, setFilteredItems, filteredItems, activeTags, toggleIsAddItem, user, handleCheck}) => {

    const [searchQuery, setSearchQuery] = useState("")
    const [currentFilteredItems, setCurrentFilteredItems] = useState(items)
    const [sortCals, setSortCals] = useState(false)
    const [sortName, setSortName] = useState(false)

    const handleFilter = (e) => {
        const searchWord = e.target.value
        setSearchQuery(searchWord)
    }

    const sortByCals = () => {
        const sortByCals = [...items]
        setSortCals(false)


        if (sortCals === false) {
            setFilteredItems(sortByCals.sort(function (a, b)  {
                if (a.nutrition[0].value < b.nutrition[0].value) {
                    return -1;
                }
                if (a.nutrition[0].value > b.nutrition[0].value) {
                    return 1;
                }
                return 0;
            }));
            setSortCals(true)
        }
        else {
            const flip = [...filteredItems.reverse()]
            setFilteredItems(flip)
        }
    }

    const sortByName = () => {
        const sortByNameArray = [...items]
        setSortName(false)

        if (sortName == false) {
            setFilteredItems(sortByNameArray.sort(function (a, b)  {
                console.log(a.name)
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if  (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0
            }));
            setSortName(true)
        }
        else {
            const flip = [...filteredItems.reverse()]
            setFilteredItems(flip)
        }
    }

    useEffect(() => {
        setFilteredItems(items.filter(item => ((item.name.toLowerCase().includes(searchQuery.toLowerCase()))
        || (item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))))
        && (
            activeTags.length === 0 || 
            (item.tags.some(tag=> activeTags.indexOf(tag) >= 0)))
        ))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTags, searchQuery])

    return (
        <>
            <div className="search">
                <div>
                    <form action="/action_page.php">
                        <input type="checkbox" id="editCheckBox" name="editCheckBox" value="check" onChange={handleCheck}/>
                        <label for="editCheckBox" style={{color: 'white', marginRight:'20px'}}> Edit Items </label><br />
                    </form>
                </div>
                <div className="searchInputs">
                    <div className="search-hover-border">

                        <input
                            className="search-input"
                            type="search"
                            id="search"
                            placeholder="Entry name / Tag"
                            onChange={handleFilter} />
                        <div className="searchIcon">
                            <IconContext.Provider value={{ size: "1em" }}>
                                <FaSearch />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <NewModal toggleIsAddItem={toggleIsAddItem} user={user}></NewModal>
                    <button onClick={sortByName} className="sortName" >Sort by Name</button>
                    <button onClick={sortByCals} className="sortCals">Sort by Calories</button>
                </div>
            </div>
        </>
    )
}

export default Searchbar