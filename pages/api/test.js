import { getSession } from "next-auth/react";

export default async function Test(req, res) {
    const session = await getSession({req});
    if(!session)
        res.status(400).json({message:"Unauthenticated user"});
    res.status(200).json({message:'Success',session});
}