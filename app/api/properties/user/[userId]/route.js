import connectDB from "@/config/database";
import Property from "@/models/Property";

//Get -> api/properties/user/:userId
export const GET = async(request, {params}) =>{
    try{
        // const params = await context.params;
        await connectDB();

        const { userId } = await params;
        if(!userId){
            return new Response("UserId is required", {status:400});
        }

        const properties = await Property.find({owner: userId});
         return new Response(JSON.stringify(properties), {status: 200});
        // return new Response("hello world", {status: 200});
    }
    catch(error){
        console.log(error);
        return new Response("Something went wrong!", {status:500})
    }
}
