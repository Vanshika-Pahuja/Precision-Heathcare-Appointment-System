import React from "react";

const Contact   = () => {
    return <section>
        <div className="px-4 mx-auto max-w-screen-md">
            <h2 className="heading text-center"> Contact us </h2>

            <p className="mb-8 lg:mb-16 font-light text-center text__para "> Got some technical issue , any other issues , kindly tell about it .... </p>

            <form action = "#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="form__label"> Your Email </label>

                    <input type = "email" id = "email" placeholder="example@gmail.com" className="form__input mt-1" />
                
                </div> 

                <div>
                    <label htmlFor="subject" className="form__label"> subject  </label>

                    <input type = "text" id = "subject" placeholder="how can I help " className="form__input mt-1" />
                
                </div> 


                <div className="sm:col-span-2 ">
                    <label htmlFor="message" className="form__label"> your message   </label>


                    <textarea 
                    rows = "6"
                    type = "text" id = "message" placeholder="leave a  comment  " className="form__input mt-1" />
                
                </div> 

                <button  type = "submit" className="btn rounded sm:w-fit">
                    Submit
                </button>

            </form>

        </div>
    </section>
}; 

export default Contact ;

