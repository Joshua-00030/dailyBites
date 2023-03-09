const NutrientBox = ({ label, trackedNutrients, setTrackedNutrients }) => {
    const handleInput = (e) =>{
        console.log(trackedNutrients)
        setTrackedNutrients( trackedNutrients.map(nutrient => 
            nutrient.name === label 
            ? {...nutrient, 'value' : e.target.value}
            : nutrient 
    ))
    }
    return (
        <input className="form-input" type="text" name={label} placeholder={`Enter ${label}`} onChange={handleInput}/>
    )
}

export default NutrientBox;