import 
{ 
  Request, 
  Response 
} from 'express';
import { AccountModel } from "../controllers/accountController";

async function canUserLogin(emailaddress: string, password: string) {

const account = await AccountModel.findOne({ emailAddress: emailaddress, password: password }).exec();

  if (account != null ) {
    return true;
  }
  throw ('email or password are invalid');
}

export async function checkAuthentication(req: Request, res: Response) {

  const emailaddress = req.body.emailaddress
  const password = req.body.password
  try {
    await canUserLogin(emailaddress, password)
    res.send(200);
  } catch {
    res.send(401);
  }
}