import data from "../src/data.json";

const scoresAvg = Math.round(data
    .map((item) => item.score)
    .reduce((a, b) => a + b, 0) / data.length);

export default function FinalScore() {
    return (
        <div className="final-score">
            <h1>{scoresAvg}</h1>
            <h2>of 100</h2>
        </div>
    )
}