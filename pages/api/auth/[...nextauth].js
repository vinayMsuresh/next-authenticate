import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    
    providers:[
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ]
})

console.log(process.env.CLIENT_ID,process.env.CLIENT_SECRET)

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