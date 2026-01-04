import FinalScore from "./FinalScore";
import ScoreComparison from "./ScoreComparison";

export default function Result() {
    return (
        <div className="result-section">
            <h1 className="result-heading">Your Result</h1>
            <FinalScore />
            <ScoreComparison/>
        </div>
    )
}