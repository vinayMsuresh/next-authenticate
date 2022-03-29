import React,{useState, useEffect} from 'react'
import { getSession, signIn } from 'next-auth/react'
export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const authenticate = async () =>{
            const session = await getSession();
            if(!session){
                signIn();
            }
            else{
                setLoading(false);
            }
        }
        authenticate();
    },[]);
    
    if(loading){
        return <h2>Loading....</h2>
    }

  return (
    <h2>Dashboard page...</h2>
  )
}
