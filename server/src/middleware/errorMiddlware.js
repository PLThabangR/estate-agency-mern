const errorMiddleware =(err,req,res,next)=>{
    const defaultErrors={
        statusCode:err.statusCode ||500,
        message:err.message || "Internal server error"
    }  

    res.status(defaultErrors.statusCode).json({
        
        message: defaultErrors.message
    })

}

export default errorMiddleware;