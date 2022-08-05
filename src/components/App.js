import React from "react"
import Dice from "./Dice"

export default function App(){

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