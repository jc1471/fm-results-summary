import FinalScore from "./FinalScore";
import ScoreComparison from "./ScoreComparison";

export default function Result() {
    return (
        <div className="result-section">
            <p>Your Result</p>
            <FinalScore />
            <ScoreComparison/>
        </div>
    )
}