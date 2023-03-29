import './Searchbar.css'
import { useEffect, useState } from 'react';
import NewModal from '../NewModal/NewModal';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ items, setFilteredItems, filteredItems, activeTags, toggleIsAddItem }) => {

    const [searchQuery, setSearchQuery] = useState("")
    const [sortCals, setSortCals] = useState(false)
    const [sortName, setSortName] = useState(false)


    const handleFilter = (e) => {
        const searchWord = e.target.value
        setSearchQuery(searchWord)
    }

    const sortByCals = () => {
        const sortByCals = [...items]
        setSortCals(false)


        if (sortCals == false) {
            setFilteredItems(sortByCals.sort(function (a, b)  {
                if (a.nutrition[0].value < b.nutrition[0].value) {
                    return -1;
                }
                if (a.nutrition[0].value > b.nutrition[0].value) {
                    return 1;
                }
                return 0
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

        console.log(filteredItems)
    }

    useEffect(() => {
        let currentFilteredItems = items
        let newFilter = []

        console.log("test")

        

        if (searchQuery[0] == "#") {
            newFilter = currentFilteredItems.filter((value) => {
                for (let x in value.tags) {
                    let tagName = searchQuery.substring(1)
                    if (value.tags[x].toLowerCase().includes(tagName.toLowerCase()))
                        return true
                }
                return false
            });
            setFilteredItems(newFilter)
            currentFilteredItems = newFilter
        }
        else if (searchQuery) {
            newFilter = currentFilteredItems.filter((value) => {
                    if (value.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        return true
                return false
            });
            setFilteredItems(newFilter)
            currentFilteredItems = newFilter
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
                currentFilteredItems = newFilter
            }
        }
        setFilteredItems(currentFilteredItems)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTags, searchQuery])

    return (
        <>
            <div className="search">
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
                    <NewModal toggleIsAddItem={toggleIsAddItem}></NewModal>
                    <button onClick={sortByCals}>Sort By Cals</button>
                    <button onClick={sortByName}>Sort By Name</button>

                </div>
            </div>
        </>
    )
}

export default Searchbar