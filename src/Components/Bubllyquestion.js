import React from 'react';
import { useState } from 'react';
import carUn from '../Assets/img/carUn.svg';
import App from "../Styles/App.css";
function Showquestion ({defaultsData}){
const [questionValue,setquestionValue] = useState('Non définit')
    return (
        <div className="showquestion">
                        <div key={defaultsData.questionid}>
                        <div className='questionTTlSpace'>
                            <span id={defaultsData.questionttl+"spandid"}><img src={carUn} className='imgTtl' alt='A Svg car icon'/></span>
                            <label id={defaultsData.questionttl+"labeldid"} className='questionTTl'>{defaultsData.askedquestions}</label>
                        </div>
                         <div className='questionResSpace'>
                            {defaultsData.answersquestion.map((answersolo)=>{
                                return(
                                <label for={questionValue} className='questionRes'>
                                    <input onChange={e => setquestionValue(e.target.value)} type="radio" name={questionValue} value={answersolo} id={questionValue} />
                                    <span className='questionSpanc'>{answersolo}</span>
                                </label>
                                )
                            })}
                        </div>
            </div>
            </div>
    )
}

export default Showquestion;