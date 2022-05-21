export default async function (error:any) {
    //console.log("============================================")
    //console.log(error);
    //console.log("============================================")
    const err = {
        statusCode: 500,
        msg: "Something went wrong, try again later"
    }

    if(error.code === 11000) {
        err.statusCode = 400;
        err.msg = `${Object.keys(error.keyValue)} field has to be unique`
        return err
    }

    if(error.name === 'ValidationError') {
        err.statusCode = 401;
        err.msg = Object.values(error.errors)   
                    .map((item) => item)
                    .join(', ');
        
        return err
    }
    
    return err
    
}