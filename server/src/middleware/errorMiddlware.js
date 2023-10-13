const errorMiddleware =(err,req,res,next)=>{
    const defaultErrors={
        statusCode:err.statusCode ||500,
        message:err.message || "Internal server problem"
    }  

    res.status(defaultErrors.statusCode).json({
        success:false,
        message: defaultErrors.message
    })

}

export default errorMiddleware;