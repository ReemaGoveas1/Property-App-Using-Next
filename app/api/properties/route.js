import connectDB from "@/config/database";
import Property from "@/models/Property";

//Get -> api/properties
export const GET = async() =>{
    try{
        await connectDB();
        const properties = await Property.find({})
         return new Response(JSON.stringify(properties), {status: 200});
        // return new Response("hello world", {status: 200});
    }
    catch(error){
        console.log(error);
        return new Response("Something went wrong!", {status:500})
    }
}