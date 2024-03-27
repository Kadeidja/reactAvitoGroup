import React from 'react';
import { useState } from 'react';

function Showquestion ({defaultsData}){
const [questionValue,setquestionValue] = useState('Non définit')
    return (
        <div className="showquestion">
                        <div key={defaultsData.questionid}>
                        <div>
                            <label>{defaultsData.askedquestions}</label>
                         </div>
                        
                            {defaultsData.answersquestion.map((answersolo)=>{
                                return(
                                <label for={questionValue}>
                                    <input onChange={e => setquestionValue(e.target.value)} type="radio" name="answer" value={answersolo} id={answersolo.questionid} />
                                    {answersolo}
                                </label>
                                )
                            })}
                            </div>
            </div>
    )
}

export default Showquestion;