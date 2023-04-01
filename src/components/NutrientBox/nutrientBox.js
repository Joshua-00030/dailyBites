import "./nutrientBox.css"
import { useState, useEffect } from "react"
const NutrientBox = ({ label, trackedNutrients, setTrackedNutrients, item, i, handleNBLoad }) => {
    const nutrition = item ? (item.nutrition ? item.nutrition.filter(i => i.name === label) : null) : null
    const [value, setValue] = useState(null)
    
    useEffect(() => {
        if(item && nutrition.length > 0){
            handleNBLoad(nutrition)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleInput = (e) =>{
        setValue(e.target.value)
        setTrackedNutrients( trackedNutrients.map(nutrient => 
            nutrient.name === label 
            ? {...nutrient, 'value' : e.target.value}
            : nutrient 
    ))
    }


    return (
        <input className={`form-input ${((nutrition && nutrition.length > 0 && label !== 'calories') || value)? ' add-top' : ''}`} type="text" name={label} placeholder={`Enter ${label}`} 
        onChange={handleInput} defaultValue={(nutrition && nutrition.length > 0 ? nutrition[0].value: '')}/>
    )
}

export default NutrientBox;