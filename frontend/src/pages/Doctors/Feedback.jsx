import React, { useState } from 'react'

import avatar from '../../assets/images/avatar.jpg';
import { formatDate } from '../../utils/formatDate';
import {AiFillStar} from 'react-icons/ai';

import FeedbackForm from './FeedbackForm';

const Feedback = () => {


    const [showFeedbackForm , setShowFeedbackForm] = useState(false)


    return (
        <div>

            <div className="mb-[50px]">
                <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] "> All  reviews (272) </h4> 



                <div className="flex justify-between gap-10 mb-[30px] ">
                    <div className="flex gap-3"> 
                    <figure className="w-10 h-10 rounded-full">
                        <img  className = "w-full" src = {avatar} alt = ""/>
                    </figure>

                    <div>
                        <h5 className="text-[16px] leading-6 text-yellow-500 font-bold "> Mona Pahuja </h5>

                        <p className="text-[14px] leading-6 text-textColor "> 
                        { formatDate('02-12-2002')}

                        </p>


                        <p className="text__para mt-3 font-medium text-[15px]">  Best surgeon and highly recommended 

                        </p>
                    </div>
                   </div> 


                   {/* <div className="flex gap-1">
                    { [ ....Array(5).keys()].map((_ , index ) => AiFillStar key = {index} color = '#0067FF'/>)} 
                       
                   </div> */}
                   <div className="flex gap-1">
                    {[...Array(5).keys()].map((_, index) => (
                        <AiFillStar key={index} color="#0067FF" />
                    ))}
                    </div>

                </div>
            </div>



            {/* <div className="text-center">
                <button className= "btn" onClick={ () => setShowFeedbackForm(true)}>
                    Give feedback  

                </button>

            </div> */}

            {!showFeedbackForm && <div className="text-center">

            <button className= "btn" onClick={ () => setShowFeedbackForm(true)}>
                    Give feedback  

                </button>
            </div>}

            {showFeedbackForm && <FeedbackForm/>}







         </div>
    )
}

export default Feedback 