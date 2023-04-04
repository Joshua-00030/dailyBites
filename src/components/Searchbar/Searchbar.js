import './Searchbar.css'
import { useEffect, useState } from 'react';
import NewModal from '../NewModal/NewModal';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Searchbar = ({ items, setFilteredItems, filteredItems, activeTags, toggleIsAddItem, user, handleCheck}) => {
    const element = <FontAwesomeIcon icon={faEnvelope} />
    const [searchQuery, setSearchQuery] = useState("")
    const [sortType, setSortType] = useState("0")

    const handleFilter = (e) => {
        const searchWord = e.target.value
        setSearchQuery(searchWord)
    }
    useEffect(() => {
        const newArr = [...items]

        const sortByCals = (val) => {
            (val === 1 ?
            newArr.sort((a, b) => a.nutrition[0].value - b.nutrition[0].value)
            : newArr.sort((a, b) => b.nutrition[0].value - a.nutrition[0].value)
            )
            setFilteredItems(newArr)
        }

        const sortByName = (val) => {
            (val === 1 ?
            (newArr.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              }))
              :
              (newArr.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA > nameB) {
                  return -1;
                }
                if (nameA < nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              }))
            )
              setFilteredItems(newArr)
            }

        if (sortType === "0") {
            setFilteredItems(newArr)
                return
        } else if(sortType === "1") { 
            sortByName(1)
        } else if(sortType === "2") {
            sortByName(2)
        }
        else if(sortType === "3") {
            sortByCals(1)
        } else if(sortType === "4") {
            sortByCals(2)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortType, items])
/*
    const sortByCals = () => {
        const sortItems = items
        sortItems.sort((a, b) => a.nutrition[0].value - b.nutrition[0].value)
        setFilteredItems(sortItems)
        console.log(filteredItems)
    }
    */
        //const sortByCals = [...items]
        //console.log(filteredItems)
        //console.log(items)
        //console.log(filteredItems)
        /*
        setSortCals(false)
        if (sortCals == false) {
            setFilteredItems(sortByCals.sort(function (a, b)  {
                if (a.nutrition[0].value < b.nutrition[0].value) {
                    return -1;
                }
                if (a.nutrition[0].value > b.nutrition[0].value) {
                    return 1;
                }
                return 0;
            }));
            //setSortCals(true)
        }
        else {
            //const flip = [...filteredItems.reverse()]
            //setFilteredItems(flip)
        }
        */
    
/*
    const sortByName = () => {
        const sortItems = items
        sortItems.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          })
          setFilteredItems(sortItems)
          console.log(filteredItems)
        }
     */  

        
        /*
        const sortByNameArray = [...items]
        setSortName(false)

        if (sortName == false) {
            setFilteredItems(sortByNameArray.sort(function (a, b)  {
                //console.log(a.name)
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
        */
    

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
                        <label htmlFor="editCheckBox" style={{color: 'white', marginRight:'20px'}}> Edit Items </label><br />
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
                    
                    <select className="sortBtn"onChange={(e) => setSortType(e.target.value)}>
                        <option value = "0" selected>Select Sort By</option>
                        <option value="1" >Alpabetical</option>
                        <option value="2" >Reverse Alpabetical</option>
                        <option value="3">Calories Ascending</option>
                        <option value="4" >Calories Descending</option>
                    </select>
                

                    {/*
                    <button onClick={sortByName} className="sortBtn" >Sort by Name</button>
                    <button onClick={sortByCals} className="sortBtn">Sort by Calories</button>
                    */}
                </div>
            </div>
        </>
    )

                }
export default Searchbar