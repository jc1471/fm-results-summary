import CategoryList from "./CategoryList";
import Continue from "./Continue";

export default function Summary() {
    return (
        <div className="summary-section">
            <p>Summary</p>
            <CategoryList />
            <Continue />
        </div>
    )
}