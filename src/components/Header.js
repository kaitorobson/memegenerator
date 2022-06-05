import React from "react"
import shiba from "./shiba-inu.png"
import trollface from "./troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={shiba}
                className="header--image--left"
                
            />

            <h2 className="header--title">Meme Generator</h2>
            <img 
                src={trollface}
                className="header--image--right"
                
            />
        </header>
    )
}