import { useState } from 'react'
import './App.css'
import Result from "../components/Result";
import Summary from "../components/Summary";

function App() {

  return (
    <div className="results-summary-container">
      <Result />
      <Summary />
    </div>
  )
}

export default App
