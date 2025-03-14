import "./YellowBox.css";
import { useState } from "react";


export default function YellowBox(){
    const [answer, setanswer] = useState("");

    function handelvalue(event){
        setanswer(event.target.value)
    }

    return (
        <>
        <div className="main">
        <h1>simple question</h1>
        <p>1+1 =?</p>

        <input onChange={handelvalue} value={answer} className="input" type="text" placeholder="write your answer here" />
        <p className="theanswer">{answer}</p>
        
        </div>

        
        </>
    )
}
