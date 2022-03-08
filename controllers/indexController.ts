import 
{ 
  Request, 
  Response 
} from 'express';

/*(req, res) => res.send('Express + TypeScript Server')*/

export default function indexController(_req: Request, res: Response)



{
  res.send("Hello")
}