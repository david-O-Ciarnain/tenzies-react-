import React from "react"

export default function Dice(props){

    const styles ={
        backgroundColor: props.isHeld ? "#1fc600":"#fff"
    }

    return(
        <div className="dice" style={styles}>
            <p>{props.value}</p>
        </div>
        
    )
}