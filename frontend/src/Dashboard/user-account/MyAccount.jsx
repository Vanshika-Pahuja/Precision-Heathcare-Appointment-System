// import {useContext , useState} from "react";
// import userImg from '../../assets/images/doctor-img01.webp'; 
// import { authContext } from "../../context/authContext";
// import MyBookings from "./Mybookings";
// import Profile from "./Profile";
// import useGetProfile from '../../hooks/useFetchData';
// import { BASE_URL} from "../../config";
// // import authToken from '../../config';
// // import useFetchData from "../../hooks/useFetchData";

// const MyAccount = () => {

//     const {dispatch} = useContext(authContext)
//     const [tab , setTab ] = useState('bookings');

//     //console.log('Token:', authToken);


//     const {data:userData , 
//         loading , 
//         error, 
//     } = useGetProfile(`${BASE_URL}/users/profile/me` )
 
//     // if (loading) {
//     //     return <div>Loading...</div>;
//     //   }
      
//     //   if (error && error.message === 'User not found') {
//     //     return <div>User not found. Please check your credentials or contact support.</div>;
//     //   }
    
//     //   if (error) {
//     //     return <div>Error: {error.message}</div>;
//     //   }
       
//     //   if (!userData || !userData.length) {
//     //     return <div>No user data available</div>;
//     //   }






//     console.log(userData , "userdata" );

//     const handleLogout = () => {
//         dispatch({type: 'LOGOUT'});
//     }


//     return (
//      <section>
//          <div className="max-w-[1170px] px-5 mx-auto">



//         <div className="grid md:grid-cols-3 gap-10">


//             <div className="pb-[50px] px-[30px] rounded-md">
               
//             </div
//         </div>
//      </section>
//     );
// };

// export default MyAccount; 
import {useContext , useState} from "react";
import userImg from '../../assets/images/doctor-img01.webp'; 
import { authContext } from "../../context/authContext";
import MyBookings from "./Mybookings";
import Profile from "./Profile";
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL} from "../../config";
// import authToken from '../../config';
// import useFetchData from "../../hooks/useFetchData";

import Error from "../../components/Error/Error";

import Loading from "../../components/Loader/Loading";

const MyAccount = () => {

    const {dispatch} = useContext(authContext)
    const [tab , setTab ] = useState('bookings');

    //console.log('Token:', authToken);


    const {data:userData , 
        loading , 
        error, 
    } = useGetProfile(`${BASE_URL}/users/profile/me` )
 
    // if (loading) {
    //     return <div>Loading...</div>;
    //   }
      
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   }
       
    //   if (!userData || !userData.length) {
    //     return <div>No user data available</div>;
    //   }






    console.log(userData , "userdata" );

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
    }


    return (
     <section>
         <div className="max-w-[1170px] px-5 mx-auto">

            {/* {loading && !error && <Loading/>} 
            

            { error &&  !loading && <Error errMessage={error}/>}
        { !loading && !error && ( */}
             <div className="grid md:grid-cols-3 gap-10">


             <div className="pb-[50px] px-[30px] rounded-md">
                 <div className="flex items-center justify-center">
                     <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                         <img src = {userImg} alt = ""  className="w-full h-full rounded-full "/>
                     </figure>
                 </div>
 
                 <div className="text-center mt-4 ">
                     <h3 className="text-[18px] leading-[30px] text-headingColor font-bold"> 
                     sbdhbjhsa
                     </h3>
                     <p className="text-textColor text-[15px] leading-6 font-medium "> aa@gmail.com
         </p>
 
                     <p className="text-textColor text-[15px] leading-6 font-medium "> Blood type: <span className="ml-2 text-headingColor text-[22px] leading-8 "> O+ </span></p>
 
                 </div>
 
                 <div className="mt-[50px] md:mt-[100px] ">
                     <button onClick= {handleLogout } className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white  " > Logout </button>
 
                     <button className="w-full bg-red-600 mt-4  p-3 text-[16px] leading-7 rounded-md  text-white" > Delete Account  </button>
 
                 </div>
 
 
             </div>
 
             <div className="md:col-span-2 md:px-[30px]">
                 <div>
                     <button  onClick={ () => setTab('bookings')} 
                     className={`${tab === 'bookings' && 'bg-yellow-500 text-white font-normal'}  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor `}>
                         My Bookings 
 
                     </button>
 
                     <button onClick={ () => setTab('settings')} className={` ${tab === 'settings' && 'bg-yellow-500 text-white font-normal'} py-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor ` }>
                         profile Settings 
 
                     </button>
                 </div>
 
                 {
                     tab === 'bookings' && <MyBookings/>
                 }
 
                 {
 
                     tab === 'settings' && <Profile user={userData}/>
 
                 }   
                 
 
             </div>
         </div>
        

        {/* )} */}



       
       </div>
     </section>
    );
};

export default MyAccount; 