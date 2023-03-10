import {FaPlusSquare, FaRegWindowClose, FaEdit} from 'react-icons/fa';
import { IconContext } from "react-icons";
import NutrientBox from '../NutrientBox/nutrientBox';

const AddNutrientBox = ({ handleAddNutrient, trackedNutrients, setTrackedNutrients }) => {

    return (
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
            {trackedNutrients[1] && (<hr />)}
            {/*trackedNutrients[0] && (<h4 className="nutrients-header">Saved Nutrients:</h4>)*/}
            {trackedNutrients[1] && (trackedNutrients.slice(1).map((nutrientObject, i) =>
                <div className="nutrient-input-div" key={i}>
                    <div>
                        <NutrientBox label={nutrientObject['name']} trackedNutrients={trackedNutrients} setTrackedNutrients={setTrackedNutrients}/>
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
    )
}
export default AddNutrientBox;