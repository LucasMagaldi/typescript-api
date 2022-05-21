export default async function name(req:any, res:any, next:any) {
    const route:string = req.originalUrl
    console.log("Route Not Found")
    return res.status(400).send(`Route: "${route}" Does Not Exist`)
}