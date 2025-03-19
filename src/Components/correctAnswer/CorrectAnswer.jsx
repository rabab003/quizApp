import './correctAnswer.css';
import correct from '../../assets/4436481.png'

export default function CorrectAnswer(){
    return(
        <>
        <div className='answer-box'>

            <div className="icon"><img src={correct}/></div>
            <p>correct answer</p>
        </div>
        </>
    )
}