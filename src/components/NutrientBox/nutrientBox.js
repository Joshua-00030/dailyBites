const NutrientBox = ({ label }) => {

    return (
        <input className="form-input" type="text" name={label} placeholder={`Enter ${label}`} />
    )
}

export default NutrientBox;