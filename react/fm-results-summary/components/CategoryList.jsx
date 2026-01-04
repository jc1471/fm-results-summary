import CategoryBar from "./CategoryBar";
import data from "../src/data.json";




export default function CategoryList() {
    return (
        <>
            {data.map((item) => (
                <CategoryBar
                    key={item.category}
                    icon={item.icon}
                    category={item.category}
                    score={item.score}
                />))}
        </>
    )
}