import React, { useEffect, useState } from "react"
import Dice from "./Dice"
import { nanoid } from "nanoid"

export default function App(){

    const [dices,setDices] = useState(allNewDice)
    const [tenzies,setTenzies] = useState(false)
    const[numberRols,setNumberRols] = useState(0)

//check winning conditions  
    useEffect(() => {
     const allIsHeld =  dices.every((dice)=> dice.isHeld)
     const firstNumberInDices = dices[0].value;
     const allValueEqual = dices.every((dice) => dice.value === firstNumberInDices)

     if(allIsHeld && allValueEqual){
        setTenzies(true)
        console.log("You win")
     }
    },[dices])


    //Helper function 
    function generateRandomDiceValue(){
        let radnomNumber = Math.floor(Math.random() * 6) + 1
        return {
            value:radnomNumber, 
            isHeld:false,
            id:nanoid()
        }
    }
    
//create new "dice" with random values 
    function allNewDice(){
        const randomNumbersArray = []
        for(let i = 0; i < 15; i++){
            randomNumbersArray.push(generateRandomDiceValue())
        }
        return randomNumbersArray
    }

//change isheld to true or false 
    function holdDice(id){
        setDices(prevDiceNumbers => 
            prevDiceNumbers.map(dice => id === dice.id ?
                 {...dice, isHeld: !dice.isHeld}: dice))
    }

//create new sett of dice and skips dice if isHeld is true 
    function rollDice(){
        setDices(prevDice => prevDice.map(dice => dice.isHeld ? dice : generateRandomDiceValue()))
        setNumberRols(prevRols => prevRols + 1)
    }

    const dice = dices.map(dice => <Dice 
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