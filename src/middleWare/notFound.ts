export default async function name(req:any, res:any, next:any) {
    console.log(req.originalUrl)
    const route:string = req.originalUrl
    return res.status(400).send(`Route: "${route}" Does Not Exist`)
}