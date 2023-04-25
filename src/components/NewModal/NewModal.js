import { useState, useEffect } from 'react';
import './NewModal.css';
import EnteredTag from '../EnteredTag/EnteredTag';
import userItemService from '../../services/userItem';
import userService from '../../services/users';
import AddNutrientBox from '../AddNutrientBox.js/addNutrientBox.js'
import NutrientBox from '../NutrientBox/nutrientBox';
import { IconContext } from "react-icons";
import { FaWindowClose, FaPlusSquare, FaSave, FaAngleDown, FaAngleUp } from 'react-icons/fa';
/*import { FaTimes, FaUser, FaUtensils, FaSignOutAlt, FaPen, FaMarker, FaHamburger, FaExpandArrowsAlt,
FaEraser, FaChartPie, FaCarrot, FaUserCircle, FaWindowClose, FaRegWindowClose, FaSignInAlt, FaPlusSquare,
FaPlus, FaPortrait, FaHome, FaEdit, FaSearch } from 'react-icons/fa';
*/

const NewModal = ({ toggleIsAddItem, user, mode, edit, item, editHandleClick }) => {

    const [modal, setModal] = useState(false);
    const [enteredTags, setEnteredTags] = useState([]);
    const [open, setOpen] = useState(false);
    const [itemDelete, setItemDelete] = useState(false);
    //const trackedNutrients = ['salt', 'sugar', 'fat', 'protein'];
    const [trackedNutrients, setTrackedNutrients] = useState(user.trackedNutrients !== [] ? user.trackedNutrients : [
        {
            name: 'calories',
            value: 0,
            measurement: 'calories'
        }
    ]);
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        if (edit) {
            toggleModal()
            setEnteredTags(item.tags)
            editHandleClick()
        }
    }, [edit])

    const toggleModal = () => {
        setModal(!modal)
        setErrMsg("")
        setOpen(false)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setOpen(!open)        
    }

    const handleClose = () => {
        setEnteredTags([]);
        toggleModal();
        setErrMsg("")
        setOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (itemDelete) {
            var answer = window.confirm(`Delete ${item.name}? {This will not affect your eaten item history}`);
            if (answer) {
                await userService.deleteUserItem({id: item.id})
                toggleIsAddItem();
                toggleModal()
                //some code
            }
            return
        }
        if(!trackedNutrients[0].value){
            setErrMsg('Calories cannot be empty')
            return
        }

        const userItemObject = {
            name: e.target[0].value,
            nutrition: trackedNutrients.filter(nutrient => nutrient.value),
            tags: enteredTags,
            edit: (item ? true : false),
            id: (item ? item.id : null)
        }

        await userItemService.create(userItemObject)        

        toggleModal();

        //const nutrientObject = trackedNutrients
        //userService.updateNutrients(nutrientObject)
        setEnteredTags([]);
        toggleIsAddItem();
    }

    const handleAddTag = (e) => {
        e.preventDefault()
        const newTag = document.getElementById("tag-input").value

        if (newTag.length == 0) {
            setErrMsg("Tag cannot be empty.")
            return
        }

        setEnteredTags(enteredTags.concat(newTag));
        document.getElementById("tag-input").value = "";
    }

    const handleAddNutrient = (e) => {
        e.preventDefault()
        const newNutrient = document.getElementById("new-nutrient-input").value
        const newMeasurement = document.getElementById("measurement-select").value
        if (!newNutrient) {
            return
        }
        const newEntry = { name: newNutrient, value: 0, measurement: newMeasurement }
        setTrackedNutrients(trackedNutrients.concat(newEntry));
        document.getElementById("new-nutrient-input").value = "";
    }

    const handleNBLoad = (props) => {
        setTrackedNutrients(n => n.map(nutrient =>
            (nutrient.name === props[0].name)
                ? { ...nutrient, 'value': props[0].value }
                : nutrient))
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {mode !== 2 && (

                <button
                    className="btn-modal"
                    onClick={toggleModal}>
                    <div className="word-icon-container" title="New">
                        New
                        <IconContext.Provider value={{ size: "1em" }}>
                            <FaPlusSquare title="New"/>
                        </IconContext.Provider>
                    </div>
                </button>
            )}

            {modal && (
                <div className="modal">
                    <div
                        onClick={toggleModal}
                        className="overlay"></div>
                    <div className="modal-content">
                        <button
                            className="close-modal"
                            onClick={handleClose}>
                            <IconContext.Provider value={{ size: "2.5em", className: "" }}>
                                <FaWindowClose title="Close"/>
                            </IconContext.Provider>
                        </button>
                        <br />
                        <h2>
                            {(mode === 2 ? 'Edit Item' : 'Create New Item')}
                        </h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <input required className="form-input" type="text" name="name" defaultValue={(item ? item.name : null)} placeholder={"Enter item name"} />
                            <NutrientBox label='calories' id='calories' trackedNutrients={trackedNutrients} setTrackedNutrients={setTrackedNutrients}
                                item={(item ? item : null)} i={0} handleNBLoad={handleNBLoad} />

                            {mode !== 2 && <button onClick={handleClick} className="nutrient-btn">

                                <div className="word-icon-container" title="Add Nutrients">
                                    Add Nutrients
                                    {open === false ? (
                                        <IconContext.Provider value={{ size: "1em", className: "" }}>
                                            <FaAngleDown />
                                        </IconContext.Provider>
                                    ) : (
                                        <IconContext.Provider value={{ size: "1em", className: "" }}>
                                            <FaAngleUp />
                                        </IconContext.Provider>
                                    )}
                                </div>
                            </button>
                            }
                            {(open || mode === 2) ? <AddNutrientBox handleAddNutrient={handleAddNutrient} trackedNutrients={trackedNutrients}
                                setTrackedNutrients={setTrackedNutrients} item={item} handleNBLoad={handleNBLoad} />
                                : null}
                            {/*<h3 className="tags-header">Tags:</h3>*/}
                            <div className="tag-div">

                                <input className="form-input" id="tag-input" type="text" name="tags" placeholder="Enter tags" />
                                <button
                                    className="btn-modal"
                                    onClick={handleAddTag}>
                                    <div className="word-icon-container" title="Add Tag">
                                        Add Tag
                                        <IconContext.Provider value={{ size: "1em", className: "" }}>
                                            <FaPlusSquare />
                                        </IconContext.Provider>
                                    </div>
                                </button>
                            </div>
                            {errMsg ? <p style={{"color" : "white", "textAlign" : "center"}} >{errMsg}</p>: null}
                            <div className="entered-tags-container">
                                {enteredTags.map((tag, i) =>
                                    <EnteredTag key={i} label={tag} enteredTags={enteredTags} setEnteredTags={setEnteredTags} />
                                )}

                            </div>
                            <div><hr /></div>
                            <div className='new-nutrient-flexbox'>

                                <button
                                    className="submit-modal btn-modal"
                                    type="submit" id="create" onClick={() => setItemDelete(false)}>
                                    <div className="word-icon-container" title="Create Item">
                                        {mode === 2 ? 'Update' : 'Create Item'}
                                        <IconContext.Provider value={{ size: "1em", className: "" }}>
                                            {mode === 2 ? <FaSave /> : <FaPlusSquare />}
                                        </IconContext.Provider>

                                    </div>

                                </button>
                                {mode === 2 &&
                                    <button
                                        className="submit-modal btn-modal"
                                        type="submit" style={{ backgroundColor: 'red' }} id="delete" onClick={() => setItemDelete(true)}>
                                        <div className="word-icon-container" title="Delete Food Item">
                                            Delete
                                            <IconContext.Provider value={{ size: "1em", className: "" }}>
                                                <FaWindowClose />
                                            </IconContext.Provider>

                                        </div>

                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewModal