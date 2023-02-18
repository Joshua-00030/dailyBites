import './EnteredTag.css';

const EnteredTag = ({label, enteredTags, setEnteredTags}) => {

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
            delete
           </div>
        </div>
    )
  }
  
  export default EnteredTag;