import React, { useState } from "react"
import Dice from "./Dice"

export default function App(){

    const [diceNumbers,setDiceNumbers] = useState(allNewDice)

    
    function allNewDice(){
        const randomNumbersArray = []
        
        for(let i = 0; i < 15; i++){
            let radnomNumber = Math.floor(Math.random() * 6) + 1
            randomNumbersArray.push(radnomNumber)
        }
        return randomNumbersArray
    }
    const dice = diceNumbers.map(dice => <Dice value={dice}/> )

    function rollDice(){
        setDiceNumbers(allNewDice)
    }
    return(
        <main className="main-body">
            <div className="dice-container">
           {dice}
            </div>
            <button onClick={rollDice} className="role-dice-botton">roll</button>
        </main>
    )
}