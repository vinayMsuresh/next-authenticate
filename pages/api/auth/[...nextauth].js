import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../lib/mongodb";
export default NextAuth({
    
    providers:[
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    callbacks:{        
        async jwt({token, account}){
            if (account) {
                token.accessToken = account.access_token
              }
              return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    },
    adapter:MongoDBAdapter(clientPromise),
    session:{
        jwt:true
    },
    jwt:{
        secret:'dwdwdwrefsklsg',
    }
})

// import NextAuth from 'next-auth/next';
// import GitHubProvider from 'next-auth/providers/github';

// export default NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//   ],
// });