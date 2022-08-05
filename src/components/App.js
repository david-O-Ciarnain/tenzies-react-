import React from "react"
import Dice from "./Dice"

export default function App(){

    function allNewDice(){
        const randomNumbersArray = []

        for(let i = 0; i < 10; i++){
            let radnomNumber = Math.floor(Math.random() * 6) + 1
            randomNumbersArray.push(radnomNumber)
        }
        console.log(randomNumbersArray)
    }
    allNewDice()

    return(
        <main className="main-body">
            <div className="dice-container">
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
                <Dice value={2} />
            </div>
        </main>
    )
}