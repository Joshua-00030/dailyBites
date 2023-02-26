import './Tagbar.css';
import Tag from '../Tag/Tag'

const Tagbar = ({ favoriteTags, activeTags, setActiveTags }) => {

    return (
        <div className="tag-container">
            <div className="tag-container-border">
                {favoriteTags[0] && (
                    favoriteTags.map((tag, i) =>
                        <Tag
                            key={i}
                            type="tag-bar"
                            label={tag}
                            activeTags={activeTags}
                            setActiveTags={setActiveTags} />
                    )
                )}
            </div>
        </div>
    )
}

export default Tagbar