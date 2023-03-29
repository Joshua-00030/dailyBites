import "./nutrientBox.css"
import { useEffect } from "react"
const NutrientBox = ({ label, trackedNutrients, setTrackedNutrients, item, i, handleNBLoad }) => {
    const nutrition = item ? (item.nutrition ? item.nutrition.filter(i => i.name === label) : null) : null

    
    useEffect(() => {
        if(item && nutrition.length > 0){
            handleNBLoad(nutrition)
        }
    },[])

    const handleInput = (e) =>{
        setTrackedNutrients( trackedNutrients.map(nutrient => 
            nutrient.name === label 
            ? {...nutrient, 'value' : e.target.value}
            : nutrient 
    ))
    }


    return (
        <input className={`form-input ${(nutrition && nutrition.length > 0 && label !== 'calories')? ' add-top' : ''}`} type="text" name={label} placeholder={`Enter ${label}`} 
        onChange={handleInput} defaultValue={(nutrition && nutrition.length > 0 ? nutrition[0].value: '')}/>
    )
}

export default NutrientBox;