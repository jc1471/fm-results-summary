import CategoryList from "./CategoryList";
import Continue from "./Continue";

export default function Summary() {
    return (
        <div className="summary-section">
            <h1 className="summary-heading">Summary</h1>
            <CategoryList className="category-list"/>
            <Continue />
        </div>
    )
}