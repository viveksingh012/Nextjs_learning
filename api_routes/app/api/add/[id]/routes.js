export async function GET(request,{params}) {
    const {id}= await params;
     return Response.json({
        message:"hello this is my first api",
        user_id:id
    })
}
 