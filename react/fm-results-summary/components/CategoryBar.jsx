

export default function CategoryBar({ icon, category, score }) {
    return (
        <div className="category-bar">
            <div className="category-name">
                <img className={category} src={icon} />
                <p className={category}>{category}</p>
            </div>
            <div className="category-score">
                <p className="score-player">{score}</p>
                <p className="score-total-/">/</p>
                <p className="score-total-100">100</p>
            </div>
        </div>
    )
}