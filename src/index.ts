import express from 'express';
import { Express, Request, Response} from 'express';

const app: Express = express()
const port: Number = 4040;


app.get('/', (req: Request, res: Response)=>{
    res.send('Express Typescript on Vercel')
})

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })