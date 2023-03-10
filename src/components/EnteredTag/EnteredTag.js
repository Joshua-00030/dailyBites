import './EnteredTag.css';
import { FaRegWindowClose } from 'react-icons/fa';
import { IconContext } from "react-icons";

const EnteredTag = ({ label, enteredTags, setEnteredTags }) => {

    const deleteTag = () => {
        let result = enteredTags.filter(tag => tag !== label)
        setEnteredTags(result)
    }

    return (
        <div className="entered-tag-body">
            <div className="entered-tag-label">
                {label}
            </div>
            <div
                className="entered-tag-delete"
                onClick={deleteTag}>
                <IconContext.Provider value={{ className: "", size: "1.5em" }}>
                    <FaRegWindowClose />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default EnteredTag;