import React, { useState } from "react"
import Dice from "./Dice"
import { nanoid } from "nanoid"

export default function App(){

    const [diceNumbers,setDiceNumbers] = useState(allNewDice)

    
    function allNewDice(){
        const randomNumbersArray = []
        
        for(let i = 0; i < 10; i++){
            let radnomNumber = Math.floor(Math.random() * 6) + 1
            randomNumbersArray.push(
            {
                value:radnomNumber, 
                isHeld:false,
                id:nanoid()
            })
        }
        return randomNumbersArray
    }
    function holdDice(id){
        setDiceNumbers(prevDiceNumbers => 
            prevDiceNumbers.map(dice => id === dice.id ?
                 {...dice, isHeld: !dice.isHeld}: dice))
    }

    const dice = diceNumbers.map(dice => <Dice 
        key={dice.id}
        value={dice.value}
         isHeld={dice.isHeld}
         hold={() => holdDice(dice.id)}
         /> )

    function rollDice(){
        setDiceNumbers(allNewDice)
    }
    return(
        <main className="main-body">
            <div className="dice-container">
           {dice}
            </div>
            <button onClick={rollDice} className="role-dice-button">roll</button>
        </main>
    )
}