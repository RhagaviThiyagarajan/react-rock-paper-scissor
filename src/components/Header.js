import React from "react";


const Header=({score})=>{
    return(
        <div className="header">
            <div className="text">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </div>
            <div className="score-box">
                <span>score</span>
                <div className="score-box_score">{score}</div>
            </div>
        </div>
    )
};



export default Header;