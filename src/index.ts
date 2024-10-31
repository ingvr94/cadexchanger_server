import express, {Express, NextFunction, Request, Response } from 'express';
import cors from 'cors'

const app:Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});

 app.use(express.json())
 app.use(cors<Request>())
 app.all('/*',function(req: Request, res: Response,next:NextFunction) {
     res.header('Access-Control-Allow-Origin','*')
     res.header('Access-Control-Allow-Header','X-Requested-With')
     res.header('Access-Control-Allow-Methods','POST')
     next()
 })

 app.post('/', (req: Request, res: Response) => {
    
     console.log(req.body)
     res.send(`Thank you for your interest, ${req.body.name}`);
   });