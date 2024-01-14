import React from "react";
import aboutimg from '../../assets/images/heroimg.jpg';

import aboutcardImg from '../../assets/images/aboutcard.jpeg';

import { Link } from "react-router-dom"; 


const About  = () => {
    return <section>
        <div className="container">
            <div className="flex jusitfy-between gap-[50px]lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* ============ about img =========== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src = {aboutimg} alt = ""/>
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%]  md:right-[-7%] lg:right-[22%]">
                        <img src = {aboutcardImg} alt = ""/>
                    </div>
                </div>

                { /*=========== about content ======== */}

                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className="heading"> Proud to be one of the best nations best </h2>
                    <p className="text__para"> 
                    Their role extends beyond diagnosing and treating illnesses; they serve as educators, advocates, and healers, making a profound impact on the lives of their patients and the overall fabric of society. One of the primary responsibilities of doctors is to provide medical care 
</p>




                    <p className="text__para mt-[30px]"> Doctors save lives, but their importance goes far beyond that. Doctors also make a difference by helping patients minimize pain, recover from a disease faster or learn to live with a disabling injury . A patient's ability to enjoy life, even if they can't be cured, makes a huge difference to them and to their families.</p>


                      <Link to = "/">
                      <button className="btn"> Learn more </button>
                      </Link>
                     
                      
                </div>







            </div>
        </div>
    </section>
}; 

export default About ;