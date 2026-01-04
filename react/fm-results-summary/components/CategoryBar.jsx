

export default function CategoryBar({ icon, category, score }) {
    return (
        <div className="category-bar">
            <img className={category} src={icon} />
            <p className={category}>{category}</p>
            <span className="score-player">{score}</span>
            <span className="score-total"> / 100</span>
        </div>
    )
}