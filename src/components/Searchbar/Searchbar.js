import './Searchbar.css'
import { useEffect, useState } from 'react';
import NewModal from '../NewModal/NewModal';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ items, setFilteredItems, filteredItems, activeTags, toggleIsAddItem, user, handleCheck}) => {

    const [searchQuery, setSearchQuery] = useState("")
    const [currentFilteredItems, setCurrentFilteredItems] = useState(items)

    const handleFilter = (e) => {
        const searchWord = e.target.value
        setSearchQuery(searchWord)
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
                </div>
            </div>
        </>
    )
}

export default Searchbar