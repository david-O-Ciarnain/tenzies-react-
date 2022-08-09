import React, { useEffect, useState } from "react"
import Dice from "./Dice"
import Header from "./Header"
import Instructions from "./Instructions"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App(){

    const [dices,setDices] = useState(allNewDice)
    const [tenzies,setTenzies] = useState(false)

    //wants too make these states as an object instead of 2 separate state
    const[highScore,setHighScore] = useState(localStorage.getItem("highScore"))
    const[currentRoll, setCurrentRoll] = useState(0)

//check winning conditions  
    useEffect(() => {
     const allIsHeld =  dices.every((dice)=> dice.isHeld)
     const firstNumberInDices = dices[0].value;
     const allValueEqual = dices.every((dice) => dice.value === firstNumberInDices)

     if(allIsHeld && allValueEqual){
        setTenzies(true)
     }
    },[dices])

    //save highscore in localStorage 
    useEffect(() =>{
        localStorage.setItem("highScore", highScore)
    },[tenzies])
    


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
        setDices(prevDice => prevDice.map(dice => {
            
            if(tenzies){
                setTenzies(false)
                // update highscore if there is a new lowest score 
                setHighScore(prevScore => prevScore > currentRoll ? currentRoll : prevScore)
                setCurrentRoll(0)
                return generateRandomDiceValue()
            }

           return dice.isHeld ? dice : generateRandomDiceValue()}))

            // keeps score and update high score if highscore is 0 
       setCurrentRoll(prevRoll => { 
        setHighScore(prevScore => prevScore < prevRoll ? prevRoll : prevScore)
        return prevRoll + 1
    })
    }
    
    const dice = dices.map(dice => 
    <Dice 
        key={dice.id}
        value={dice.value}
         isHeld={dice.isHeld}
         hold={() => holdDice(dice.id)}
         /> )

   const buttonText = tenzies ? "New Game" : "Roll"

    return(
        <main className="main-body">
            {tenzies && <Confetti />}
            <Header 
            roles= {currentRoll}
            highScore ={highScore}
            /> 
            <Instructions />
            
            <div className="dice-container">
           {dice}
            </div>
            <button onClick={rollDice} className="role-dice-button">{buttonText}</button>
        </main>
    )
}