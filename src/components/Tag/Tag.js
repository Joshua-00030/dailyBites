import './Tag.css'
const Tag = ({ type, label, activeTags, setActiveTags }) => {

    const handleClick = (e) => {
        //make active to nonactive
        if (e.target.classList.contains("active-tag")) {
            e.target.classList.remove("active-tag")
            e.target.classList.add("nonactive-tag")
            const filterTags = activeTags.filter((value) => {
                return value !== e.target.innerText;
            });
            setActiveTags(filterTags)


        //make nonactive to active
        } else {
            e.target.classList.add("active-tag")
            e.target.classList.remove("nonactive-tag")
            setActiveTags(activeTags.concat(e.target.innerText))
        }
    }

    const handleAdd = (e) => {

    }

    return (
        <button
            type="button"
            className={type === "add" ? "tag-button add-tag" : "tag-button nonactive-tag"}
            onClick={type === "tag-bar" ? handleClick : handleAdd}>
            {label}
        </button>
    )
}

export default Tag