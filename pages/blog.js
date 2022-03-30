import React from 'react'
import { useSession, getSession } from 'next-auth/react'
export default function Blog({data}) {
  return (
    <h2>Blog page - {data}</h2>
  )
}

export async function getServerSideProps(context){
    const session = await getSession(context);
    if(!session){
      return{
        redirect:{
          destination:'/api/auth/signin?callBackUrl=http://localhost:3000/blog',
          permanent:true
        }
      }
    }
    return{
        props:{
          session,
          data:session ? 'List of 100 blog posts' : 'List of free blog posts'
        }
    }
}
