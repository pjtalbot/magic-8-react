import React, { useState } from "react"


function Magic8( props ) {
    function randomAnswer(arr) {
        let num = Math.floor(Math.random() * 20) -1 
        return arr[num]
    }
    

    const [color, setColor] = useState("black")
    const isShaken = color !== "black"
    const [msg, setMsg] = useState('')
    console.log(isShaken)
    console.log(color)
  
    // let answer = randomAnswer(props)
    return (
        // use state variable directly in styling? for background

        <div>
            <div id="answer" onClick={() => {
                const answer = randomAnswer(props)
                console.log(answer.color)
                   setColor(answer.color)
                   setMsg(answer.msg)

            }} className='' style={{ backgroundColor: color }}>{ msg }</div>
        </div>
    )
}

Magic8.defaultProps = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

export default Magic8