import React, { useState } from "react"
import Dice from "./Dice"
import { nanoid } from "nanoid"

export default function App(){

    const [diceNumbers,setDiceNumbers] = useState(allNewDice)
    const[numberRols,setNumverRols] = useState(0)

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
        for(let i = 0; i < 15; i++){
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
        setNumverRols(prevRols => prevRols + 1)
    }

    const dice = diceNumbers.map(dice => <Dice 
        key={dice.id}
        value={dice.value}
         isHeld={dice.isHeld}
         hold={() => holdDice(dice.id)}
         /> )

   

    return(
        <main className="main-body">
            <h1 className="number-rols">roles {numberRols}</h1>
              <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
           {dice}
            </div>
            <button onClick={rollDice} className="role-dice-button">roll</button>
        </main>
    )
}