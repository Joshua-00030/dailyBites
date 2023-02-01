import './Searchbar.css'
//import { useState } from 'react'

const Searchbar = ({items, setFilteredItems}) => {

    //const [searchQuery, setSearchQuery] = useState([])

    const handleFilter = (e) => {
        const searchWord = e.target.value
        console.log(searchWord)
        const newFilter = items.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredItems(newFilter)
    }
    
    return (
        <div className="search-wrapper">
            <input 
            type="search" 
            id="search" 
            placeholder="Search items"
            onChange={handleFilter}/>
        </div>
    )
}

export default Searchbar