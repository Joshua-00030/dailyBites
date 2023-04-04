import { FaPlusSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";
import NutrientBox from '../NutrientBox/nutrientBox';

const AddNutrientBox = ({ handleAddNutrient, trackedNutrients, setTrackedNutrients, item, handleNBLoad }) => {

    return (
        <div className="nutrient-container">
            <div className="new-nutrient-flexbox">
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
            {trackedNutrients[1] && (<hr />)}
            {/*trackedNutrients[0] && (<h4 className="nutrients-header">Saved Nutrients:</h4>)*/}
            {trackedNutrients[1] && (trackedNutrients.slice(1).map((nutrientObject, i) =>
                <div className="nutrient-input-div" key={i}>
                    <div>
                        {item ? ((item.nutrition.filter(n => n.name === trackedNutrients[i + 1].name)[0] || trackedNutrients[i+1].value )?
                            <label htmlFor={nutrientObject['name']} style={{ position: 'absolute', transform: 'translate(0px, -4px)', fontSize: '.8em', color: '#167990' }}>{nutrientObject['name']}</label>
                            : <></>) : <></>}
                        <NutrientBox id={nutrientObject['name']} label={nutrientObject['name']} trackedNutrients={trackedNutrients}
                            setTrackedNutrients={setTrackedNutrients} i={i + 1} item={item ? item : null} handleNBLoad={handleNBLoad} />
                        <span className="measurement-label">{nutrientObject['unit']}</span>
                    </div>
                    {/*

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
                            */}
                </div>
            ))}
        </div>
    )
}
export default AddNutrientBox;