import express from "express"


const app = express()

app.get("/login", (req: express.Request<unknown,unknown,unknown,{code:string, state:string}>, res) => {
    res.send("")
})



export default app