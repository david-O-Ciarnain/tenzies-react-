import React from "react"

export default function Dice(props){

    const styles ={
        backgroundColor: props.isHeld ? "#1fc600":"#fff"
    }

    return(
        <div className="dice" style={styles} onClick={ props.hold}>
            <p>{props.value}</p>
        </div>
        
    )
}