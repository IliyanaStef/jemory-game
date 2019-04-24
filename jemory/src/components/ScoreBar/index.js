import React from "react";
import "./ScoreBar.css";

const ScoreBar = props => (
    <div className="score-bar text-center">
        <h3>SCORE: {props.score}</h3>
    </div>
);

export default ScoreBar;