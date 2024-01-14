// import  {useEffect , useState} from 'react';
// import { authToken } from '../config';



// const useFetchData = (url) => {

//     const [data , setData ] = useState([])
//     const [loading , setLoading ] = useState(false)
//     const [error , setError] = useState(null)

//     useEffect( () => {
//        const fetchData = async() => {
//          setLoading(true)
//         try {

//             // let token = localStorage.getItem('token');
//             // const token = localStorage.getItem('token');
//             // const decodedToken = jwtDecode(token);

           

       

//             console.log('Auth Token:', authToken);
           

//             const res = await fetch(url , {
//                 headers: {
//                     Authorization: `Bearer ${authToken}`,
//                     'Content-Type': 'application/json',
//                 }

//             });

//             console.log('Fetch Response:', res); // Log the response
    
//             const result = await res.json()
//             console.log('Received data:', result);

           
    
//             if(!res.ok)
//             {
//                 console.error(`Received error status ${res.status}: ${result.message}`);

//                 throw new Error(result.message)
    
//             }

//             setData(result.data)
//             setLoading(false)

//         }
        
//         catch(err) {
//            setLoading(false)
//            setError(err.message);
//            console.error('fetch error- ', err);
//            console.error(err.stack); // Log the stack trace for better debugging

//             // Check for specific error conditions
//     //     if (err.name === 'TypeError' && err.message.includes('jwt_decode is not a function')) {
//     //         console.error('jwt_decode is not available. Make sure the jwt-decode library is correctly installed.');
//     //     } else if (err.name === 'SyntaxError' && err.message.includes('Unexpected token')) {
//     //         console.error('Error parsing JSON response. Make sure the server is returning valid JSON.');
//     // }
//         }

//        }

//      fetchData()
//     } , [ url ] )

//     return new Promise((resolve, reject) => {
//         fetchData().then(() => resolve({ data, loading, error })).catch(reject);
//       });

//     // return {
//     //     data, loading, error 
//     // }
// };



// export default useFetchData;

import { useEffect, useState } from 'react';
import { authToken } from '../config';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
        //   headers: {
        //     Authorization: `Bearer ${authToken}`,
        //     'Content-Type': 'application/json',
        //   },
        });

        const result = await res.json();

        if (!res.ok) {
            if (res.status === 404) {
              throw new Error('User not found');
            } else {
              throw new Error(result.message);
            }
          }


        setData(result.data);
        setLoading(false);
      } catch (err) {
        // setLoading(false);
        // setError(err.message);
        // console.error('fetch error- ', err);
        // console.error(`fetch error-  Status Code: ${err.response?.status}, Message: ${err.message}`);

        setLoading(false);

            // if (err.response && err.response.status) {
            //     console.error(`fetch error-  Status Code: ${err.response.status}, Message: ${err.message}`);
            // } else {
            //     console.error('fetch error- ', err);
            // }

            setError(err.message);

        // Check for specific error conditions
        // if (err.name === 'TypeError' && err.message.includes('jwt_decode is not a function')) {
        //   console.error('jwt_decode is not available. Make sure the jwt-decode library is correctly installed.');
        // } else if (err.name === 'SyntaxError' && err.message.includes('Unexpected token')) {
        //   console.error('Error parsing JSON response. Make sure the server is returning valid JSON.');
        // }
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
