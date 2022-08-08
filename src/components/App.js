import React, { useState } from "react"
import Dice from "./Dice"
import { nanoid } from "nanoid"

export default function App(){

    const [diceNumbers,setDiceNumbers] = useState(allNewDice)

    function generateRandomDiceValue(){
        let radnomNumber = Math.floor(Math.random() * 6) + 1
        return {
            value:radnomNumber, 
            isHeld:false,
            id:nanoid()
        }
    }
    
    
    function allNewDice(){
        const randomNumbersArray = []
        for(let i = 0; i < 10; i++){
            randomNumbersArray.push(generateRandomDiceValue())
        }
        return randomNumbersArray
    }


    function holdDice(id){
        setDiceNumbers(prevDiceNumbers => 
            prevDiceNumbers.map(dice => id === dice.id ?
                 {...dice, isHeld: !dice.isHeld}: dice))
    }


    function rollDice(){
        setDiceNumbers(prevDice => prevDice.map(dice => dice.isHeld ? dice : generateRandomDiceValue()))
    }

    const dice = diceNumbers.map(dice => <Dice 
        key={dice.id}
        value={dice.value}
         isHeld={dice.isHeld}
         hold={() => holdDice(dice.id)}
         /> )

   

    return(
        <main className="main-body">
            <div className="dice-container">
           {dice}
            </div>
            <button onClick={rollDice} className="role-dice-button">roll</button>
        </main>
    )
}