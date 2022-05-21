export default async function (error:any) {
    console.log(error);
    const err = {
        statusCode: 500,
        msg: "Something went wrong, try again later"
    }

    if(error.code === 11000) {
        err.statusCode = 400;
        err.msg = `${Object.keys(error.keyValue)} field has to be unique`
        return err
    }
    console.log("Final Erro")
    return error
    
}