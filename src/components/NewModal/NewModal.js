import { useState } from 'react';
import './NewModal.css';
import EnteredTag from '../EnteredTag/EnteredTag';
import userItemService from '../../services/userItem';
import NutrientBox from '../NutrientBox/nutrientBox';
import { IconContext } from "react-icons";
import { FaWindowClose, FaPlusSquare, FaRegWindowClose, FaEdit, FaAngleDown, FaAngleUp } from 'react-icons/fa';
//import { FaTimes, FaUser, FaUtensils, FaSignOutAlt, FaPen, FaMarker, FaHamburger, FaExpandArrowsAlt, FaEraser, FaChartPie, FaCarrot, FaUserCircle, FaWindowClose, FaRegWindowClose, FaSignInAlt, FaPlusSquare, FaPlus, FaPortrait, FaHome, FaEdit, FaSearch } from 'react-icons/fa';

const NewModal = ({ toggleIsAddItem }) => {

    const [modal, setModal] = useState(false);
    const [enteredTags, setEnteredTags] = useState([]);
    const [open, setOpen] = useState(false);
    //const trackedNutrients = ['salt', 'sugar', 'fat', 'protein'];
    const [trackedNutrients, setTrackedNutrients] = useState([]);

    const toggleModal = () => {
        setModal(!modal)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setOpen(!open)
    }

    const handleClose = () => {
        setEnteredTags([]);
        toggleModal();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userItemObject = {
            name: e.target[0].value,
            nutrition: [
                {
                    name: 'calories',
                    value: parseInt(e.target[1].value)
                },
                {

                }
            ],
            tags: enteredTags,
        }
        userItemService.create(userItemObject)

        setEnteredTags([]);
        toggleIsAddItem();
        toggleModal();
    }

    const handleAddTag = (e) => {
        e.preventDefault()
        const newTag = document.getElementById("tag-input").value
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
        const newEntry = { nutrient: newNutrient, measurement: newMeasurement }
        setTrackedNutrients(trackedNutrients.concat(newEntry));
        document.getElementById("new-nutrient-input").value = "";
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button
                className="btn-modal"
                onClick={toggleModal}>
                <div className="word-icon-container">
                    New
                    <IconContext.Provider value={{ size: "1em" }}>
                        <FaPlusSquare />
                    </IconContext.Provider>
                </div>
            </button>

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
                                <FaWindowClose />
                            </IconContext.Provider>
                        </button>
                        <br />
                        <h2>
                            Create New Item
                        </h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <input className="form-input" type="text" name="name" placeholder="Enter item name" />
                            <input className="form-input" type="text" name="calories" placeholder="Enter calories" />

                            <button onClick={handleClick} className="nutrient-btn">

                                <div className="word-icon-container">
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
                            {open ? (
                                <>
                                    <div className="nutrient-container">
                                        <div class="new-nutrient-flexbox">
                                            {/*<h4 className="nutrients-header">Create New Nutrient:</h4>*/}
                                            <input className="form-input" id="new-nutrient-input" type="text" name="tags" placeholder="Enter nutrient name" />
                                            <select className="measurement-select" id="measurement-select">
                                                <option>g</option>
                                                <option>mg</option>
                                                <option>% DV</option>
                                            </select>
                                            <button
                                                className="btn-modal"
                                                onClick={handleAddNutrient}>
                                                <div className="word-icon-container">
                                                    Add
                                                    <IconContext.Provider value={{ size: "1em", className: "" }}>
                                                        <FaPlusSquare />
                                                    </IconContext.Provider>
                                                </div>
                                            </button>
                                        </div>
                                        {trackedNutrients[0] && (<hr />)}
                                        {/*trackedNutrients[0] && (<h4 className="nutrients-header">Saved Nutrients:</h4>)*/}
                                        {trackedNutrients[0] && (trackedNutrients.map((nutrientObject, i) =>
                                            <div className="nutrient-input-div" key={i}>
                                                <div>
                                                    <NutrientBox label={nutrientObject['nutrient']} />
                                                    <span className="measurement-label">{nutrientObject['measurement']}</span>
                                                </div>

                                                <div className='icons-div'>
                                                    <div>
                                                        <IconContext.Provider value={{ className: "nutrient-edit-icon", size: "1.5em" }}>
                                                            <FaEdit />
                                                        </IconContext.Provider>
                                                    </div>
                                                    <div>
                                                        <IconContext.Provider value={{ className: "nutrient-delete-icon", size: "1.5em" }}>
                                                            <FaRegWindowClose />
                                                        </IconContext.Provider>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )
                                : null}
                            {/*<h3 className="tags-header">Tags:</h3>*/}
                            <div className="tag-div">

                                <input className="form-input" id="tag-input" type="text" name="tags" placeholder="Enter tags" />
                                <button
                                    className="btn-modal"
                                    onClick={handleAddTag}>
                                    <div className="word-icon-container">
                                        Add Tag
                                        <IconContext.Provider value={{ size: "1em", className: "" }}>
                                            <FaPlusSquare />
                                        </IconContext.Provider>
                                    </div>
                                </button>
                            </div>
                            <div className="entered-tags-container">
                                {enteredTags.map((tag, i) =>
                                    <EnteredTag key={i} label={tag} enteredTags={enteredTags} setEnteredTags={setEnteredTags} />
                                )}

                            </div>
                            <div><hr /></div>

                            <button
                                className="submit-modal btn-modal"
                                type="submit">
                                <div className="word-icon-container">
                                    Create Item
                                    <IconContext.Provider value={{ size: "1em", className: "" }}>
                                        <FaPlusSquare />
                                    </IconContext.Provider>

                                </div>

                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewModal