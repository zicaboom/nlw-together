import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { router } from "./routes"

const app = express()
const PORT = 3333

app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            erro: err.message  
        })
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(PORT, ()=>console.log(`Server is running in http://localhost:${PORT}`))