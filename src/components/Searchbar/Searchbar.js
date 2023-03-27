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
        setSearchQuery(c =>searchWord)
    }

    useEffect(() => {
        let newFilter = []
        setCurrentFilteredItems(items)
        if (searchQuery) {
            newFilter = currentFilteredItems.filter((value) => {
                for (let x in value.tags) {
                    if (value.tags[x].toLowerCase().includes(searchQuery.toLowerCase()) || value.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        return true
                }
                return false
            });
            setFilteredItems(newFilter)
            setCurrentFilteredItems(newFilter)
        }
        if (activeTags[0]) {
            for (let i in activeTags) {
                newFilter = currentFilteredItems.filter((value) => {
                    for (let j in value.tags) {
                        if (value.tags[j].toLowerCase().includes(activeTags[i].toLowerCase()))
                            return true
                    }
                    return false
                });
                setFilteredItems(newFilter)
                setCurrentFilteredItems(newFilter)
            }
        }
        setFilteredItems(currentFilteredItems)
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