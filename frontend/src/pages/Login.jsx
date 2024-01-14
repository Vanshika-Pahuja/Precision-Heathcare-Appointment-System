// import { useState } from "react";

// const Login   = () => {
 

//     const [formData , setFormData] = useState({
//         email: '', 
//         password: ''
//     })

//     const handleInputChange = e => {
//         setFormData({... formData, [e.target.name]:e.target.value})
//     }


//     return (
//     <section className="px-5 lg:px-0 "> 


//     <div className="w-full max-w-[570px] rounded-lg sadow-md md:p-10 justify-center"> 
//     <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 "> Hello !!!<span className="text-yellow-500"> Welcome 
//         </span> Back!!!! </h3>

//         <form className="py-4 md:py-0">
//             <div className="mb-5">
//                 <input type = "email" placeholder="'ENTER YOUR EMAIL" name = "email" value = {formData.email} onChange={handleInputChange} />

//             </div>

//         </form>

//     </div>
//     </section>

//     );
// }; 

// export default Login ;

import { useState , useContext } from "react";
import {Link  , useNavigate} from 'react-router-dom';
import { BASE_URL } from "../config";

import { toast } from "react-toastify";
import {authContext } from '../context/authContext.jsx';
import HashLoader from "react-spinners/HashLoader.js";


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(authContext);



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const submitHandler = async event => {

    console.log('submit button clicked ');

    event.preventDefault();
    setLoading(true)

    console.log('Request Payload:', JSON.stringify(formData));

    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(formData),
        });

        const result  = await res.json()

        if(!res.ok)
        {
            throw new Error(result.message)
        }


        dispatch({
          type: 'LOGIN_SUCCESS', 
          payload: {
            user: result.data, 
            token: result.token, 
            role:result.role, 
          }
        }); 

        console.log(result , "login data ")







        setLoading(false)
        toast.success(result.message)
        navigate('/home');
        console.log('navigate to home  page ');


    }catch(err)
    {
        console.error('fetch error ', err);
        toast.error(err.message)
        setLoading(false)

    }
  };

















  return (
    
    <section className="flex justify-center items-center h-screen px-5 lg:px-0  mt-[-20px]">

        
      <div className="w-full max-w-[570px] rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello !!!<span className="text-yellow-500"> Welcome </span> Back!!!!
        </h3>

        <form 
        className="py-4 md:py-0"  onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
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
              placeholder="ENTER YOUR PASSWORD "
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 rounded-md py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required 
            />
          </div>


          <div className="mt-7">
            <button className="w-full bg-yellow-500 text-white text-[18px] leading-[30px] rounded-lg  px-4 py-3 " type = "submit">  {loading ? <HashLoader size = {25}  color = "#fff" /> : 'Login'} 
            </button>

          </div>

          <p className="mt-5 text-textColor text-center ">  Don't you have a account. <Link to= '/register' className="text-yellow-500 font-medium "> Register    </Link></p>


          {/* Add other form elements as needed */}
        </form>
      </div>
    </section>
  );
};

export default Login;
