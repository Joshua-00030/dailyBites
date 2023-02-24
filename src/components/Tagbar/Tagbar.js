import './Tagbar.css';
import Tag from '../Tag/Tag'

const Tagbar = ({ activeTags, setActiveTags }) => {

    return (
        <div className="tag-container">
            <div className="tag-container-border">
                <Tag type="tag-bar" label="oatmeal" activeTags={activeTags} setActiveTags={setActiveTags}></Tag>
                <Tag type="tag-bar" label="breakfast" activeTags={activeTags} setActiveTags={setActiveTags}></Tag>
                <Tag type="tag-bar" label="lunch" activeTags={activeTags} setActiveTags={setActiveTags}></Tag>
                <Tag type="tag-bar" label="hamburger" activeTags={activeTags} setActiveTags={setActiveTags}></Tag>
                <Tag type="tag-bar" label="snacks" activeTags={activeTags} setActiveTags={setActiveTags}></Tag>
                <Tag type="tag-bar" label="exercise" activeTags={activeTags} setActiveTags={setActiveTags}></Tag>
            </div>
        </div>
    )
}

export default Tagbar