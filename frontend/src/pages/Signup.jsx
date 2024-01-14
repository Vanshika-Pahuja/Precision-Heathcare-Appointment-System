import { useState } from "react";

import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/doctor-img01.webp';

import {Link, useNavigate } from 'react-router-dom';

import uploadImageToCloudinary from "../utils/uploadCloudinary";

import { BASE_URL } from "../config";

import { toast } from 'react-toastify';

import HashLoader from 'react-spinners/HashLoader';

const Signup  = () => {

    const [selectedFile , setSelectedFile] = useState(null)

    const [previewURL , setPreviewURL] = useState("");

    const [loading , setLoading] = useState(false)



    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '', 
        photo:'',
        gender:'',
        role:'patient',
      });

      const navigate = useNavigate()
    
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleFileInputChange =  async (event) => {
        const file = event.target.files[0];

        const data = await uploadImageToCloudinary(file) 

        setPreviewURL(data.url);
        setSelectedFile(data.url);
        setFormData({...formData, photo: data.url });

        //console.log(data);
        // later we will use cloudinary to upload images 

        // console.log(file)
      };

      const submitHandler = async event => {

        console.log('submit button clicked ');

        event.preventDefault();
        setLoading(true)

        console.log('Request Payload:', JSON.stringify(formData));

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(formData),
            });

            const {message} = await res.json()

            if(!res.ok)
            {
                throw new Error(message)
            }

            setLoading(false)
            toast.success(message)
            navigate('/login');
            console.log('navigate to login page ');


        }catch(err)
        {
            console.error('fetch error ', err);
            toast.error(err.message)
            setLoading(false)

        }
      };

      

    return (
    <section className="px-5 xl:px-0">
        <div className="max-w-[1170px] mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {/* ======== img box ========= */}
                <div className="hidden lg:block bg-primaryColor rounded-l-lg">
                    <figure className="rounded-l-lg">
                        <img src = {signupImg} alt = ""  className="w-full rounded-l-lg"/>
                    </figure>
                </div>

                { /* ======== sign up form ========= */}
                <div className="rounded-l-lg lg:pl-16 py-10">
                    <h3 className="text-headingColor text-[22px] leading-9 font-semibold mb-10 "> Create an <span className="text-yellow-500">account  </span>  </h3>


                    <form onSubmit={submitHandler}> 
                    <div className="mb-5">
                    <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    
                    className="w-full  px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer"
                    required 
                    />
                   </div>

                   <div className="mb-5">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    
                    className="w-full  px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer"
                    required 
                    />
                   </div>

                   <div className="mb-5">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    
                    className="w-full  px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer"
                    required 
                    />
                   </div>


                   <div className="mb-5 flex items-center justify-between">
                    <label className="text-headingColor font-bold text-[16px] leading-7">
                        Arre you a : 
                        <select name = "role" 
                         value={formData.role}
                         onChange={handleInputChange}
                        
                        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none ">
                            <option value = "patient">
                                Patient 
                            </option>

                            <option value = "doctor">
                                Doctor 
                            </option>

                        </select>
                    </label>

                    <label  className="text-headingColor font-bold text-[16px] leading-7">
                       Gender: 
                        <select name = "gender"
                         value={formData.gender}
                         onChange={handleInputChange}
                        
                        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none ">
                            <option value = "">
                                Select 
                            </option>

                            <option value = "male">
                                Male  
                            </option>

                            <option value = "female">
                                Female
                            </option>

                            <option value = "other">
                                other
                            </option>

                        </select>
                    </label>
                   </div>

                   <div className="mb-5 flex items-center gap-3">
                   {selectedFile && 
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-yellow-500 flex items-center justify-center">
                        <img src = {previewURL} className="w-full rounded-full"
                        alt = ""/>
                    </figure> } 

                    <div className="relative w-[160px] h-[50px] ">
                        <input type = "file" name = "photo" id =  "customFile"
                        onChange={handleFileInputChange }
                        accept = ".jpg, .png" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer">

                        </input>

                        <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "> Upload photo 
                        </label>
                    </div>
                   </div>


                   { /* ========== */}
                   <div className="mt-7">
                        <button 
                        disabled={loading && true}
                        className="w-full bg-yellow-500 text-white text-[18px] leading-[30px] rounded-lg  px-4 py-3 " type = "submit">  {loading ? <HashLoader  size={35}  color="#ffffff"/> : 'Sign up'}  </button>

                    </div>

                    <p className="mt-5 text-textColor text-center ">  already have a account?  <Link to= '/login' className="text-yellow-500 font-medium "> Login    </Link></p>




                    </form>
                   </div>

                
            </div>
        </div>


    </section>

    );
}; 

export default Signup;