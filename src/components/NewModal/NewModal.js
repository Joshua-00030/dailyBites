import {useState} from 'react';
import './NewModal.css';
import EnteredTag from '../EnteredTag/EnteredTag';

const NewModal = () => {

    const [modal, setModal] = useState(false);
    const [enteredTags, setEnteredTags] = useState([]);
    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = () => {

    }

    const handleAddTag = (e) => {
        e.preventDefault()
        let newTag = document.getElementById("tag-input").value
        setEnteredTags(enteredTags.concat(newTag));
        document.getElementById("tag-input").value = "";
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    return (
        <>
        <button 
        className="btn-modal add-button"
        onClick={toggleModal}>
        New
        </button>

        {modal && (
        <div className="modal">
        <div 
        onClick={toggleModal}
        className="overlay"></div>
        <div className="modal-content">
        <button 
            className="close-modal btn-modal"
            onClick={toggleModal}>
                Close
            </button>
            <h2>Enter New Item</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input className="form-input" type="text" name="name" placeholder="Enter item name" />
                <input className="form-input" type="text" name="calories" placeholder="Enter calories" />
                <div className="tag-div">
                <input className="form-input" id="tag-input" type="text" name="tags" placeholder="Enter tags" />
                <button
                className="add-tag-button btn-modal"
                onClick={handleAddTag}>Add tag</button>
                </div>
                <h3 className="tags-header">Tags:</h3> 
            </form>
            <div className="entered-tags-container">
                    {enteredTags.map( (tag) => 
                    <EnteredTag label={tag} enteredTags = {enteredTags} setEnteredTags = {setEnteredTags}/>
                    )}
                </div>
            <button 
            className="submit-modal btn-modal"
            onClick={toggleModal}>
                Add
            </button>
        </div>
        </div>
        )}
        </>
    )
}

export default NewModal