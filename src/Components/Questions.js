import React, { useEffect, useState } from 'react';
import { MathJax } from "better-react-mathjax";

const Questions = () => {

    const arr = [
        "AreaUnderTheCurve_901",
        "BinomialTheorem_901",
        "DifferentialCalculus2_901"

    ]
    const [question, setQuestion] = useState([]);
    const [id, setId] = useState(0);


    useEffect(() => {
        getQuestion()
    }, [id])


    const getQuestion = async () => {
        const data = await fetch("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=" + arr[id]);
        const jsonData = await data.json();
        setQuestion(jsonData[0]?.Question)
    }



    return (
        <div className='flex-col p-5 shadow-xl bg-gray-100 rounded-xl m-10 w-3/4'>
            <div className='sm:flex-col lg:flex-row '>

                {/* <div className='flex-col p-10'> */}
                <MathJax>   <p className='text-sm  font-semibold lg:text-xl'>{question}</p> </MathJax>
                {/* </div> */}
                <div className='flex justify-center'>
                    {/* <div className=' m-10'> */}
                    <button className="w-40 border-2 rounded-md m-4 h-12 bg-slate-500 text-white disabled:bg-white disabled:text-black "
                        onClick={() => setId(id - 1)}
                        disabled={id === 0}>BACK</button>
                    {/* </div> */}
                    {/* <div className=' m-10'> */}
                    <button className="w-40 border-2 rounded-md m-4 h-12 bg-slate-500 text-white disabled:bg-white disabled:text-black "
                        onClick={() => setId(id + 1)}
                        disabled={id === 2}>Next</button>
                    {/* </div> */}
                </div>
            </div>
            <p className='flex justify-end'>{(id + 1) + "/" + arr.length}</p>
        </div>
    )
}

export default Questions