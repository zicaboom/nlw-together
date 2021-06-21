import express from 'express'

const app = express()
const PORT = 3333

app.get('/', (req,res)=>res.send('Home'))

app.listen(PORT, ()=>console.log(`Server is running in http://localhost:${PORT}`))