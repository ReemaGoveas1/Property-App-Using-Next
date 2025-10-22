import connectDB from "@/config/database"
import User from '@/models/User';
import { getSessionUser } from "@/utils/getSessionUser"

//as there may be ssr issue for this route, so this line is added, specially when we deploy in vercel
export const dynamic = "force-dynamic";

export const POST = async (request) =>{
    try{
        await connectDB();
        const {propertyId} = await request.json();
        const sessionUser = await getSessionUser();

        if(!sessionUser || !sessionUser.userId){
            return new Response ("User ID is required", {status: 401});
        }

        const {userId} = sessionUser;

        //Find user in database
        const user = await User.findOne({_id: userId});

        //check if property is bookmarked
        let isBookmarked = user.bookmarks.includes(propertyId);
        
        return new Response(JSON.stringify({isBookmarked}), {status:200})

    } catch(error){
        console.log(error);
        return new Response("Something went wrong", {status:500})

    }
}