import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
//import Tag from '../Tag/Tag'
import { useEffect, useState } from 'react';

const Searchbar = ({ items, setFilteredItems, filteredItems, activeTags }) => {

    const [searchQuery, setSearchQuery] = useState("")

    const handleFilter = (e) => {
        const searchWord = e.target.value
        //const newFilter = items.filter((value) => {
        //    return value.name.toLowerCase().includes(searchWord.toLowerCase());
        //});
        //setFilteredItems(newFilter)
        setSearchQuery(searchWord)
    }

    useEffect(() => {
        console.log(searchQuery, activeTags)
        //add search word to filtering
        //const searchWord = document.getElementById('search').value
        let currentFilteredItems = items
        let newFilter = []

        if (searchQuery) {
            newFilter = currentFilteredItems.filter((value) => {
                for (let x in value.tags) {
                    if(value.tags[x].toLowerCase().includes(searchQuery.toLowerCase()) || value.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        return true
                }
                return false
            });
            setFilteredItems(newFilter)
            currentFilteredItems = newFilter
        }
        if (activeTags) {
            for (let i in activeTags) {
                newFilter = currentFilteredItems.filter((value) => {
                    for (let j in value.tags) {
                        if(value.tags[j].toLowerCase().includes(activeTags[i].toLowerCase()))
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
        <div className="search">
            <div className="searchInputs">
                <input
                    type="search"
                    id="search"
                    placeholder="Search tags"
                    onChange={handleFilter} />
                <div className="searchIcon">
                    <SearchIcon />
                </div>
                <button
                    className="add-button"
                    type="button">new item</button>
            </div>
        </div>

    )
}

export default Searchbar