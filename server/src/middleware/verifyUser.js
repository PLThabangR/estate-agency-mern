

export const verifyToken=()=>{

    const token =req.cookies.access_token;

    if(!token) return nextTick(errorHandler(401,'Unauthorized access token'))
    //Check if token is correct

}