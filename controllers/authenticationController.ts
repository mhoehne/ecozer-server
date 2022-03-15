import { Request, Response } from 'express';
import { AccountModel } from '../controllers/accountController';
import Cookies from 'universal-cookie';

async function canUserLogin(emailaddress: string, password: string) {
  const account = await AccountModel.findOne({
    emailAddress: emailaddress,
    password: password,
  }).exec();

  if (account != null) {
    return true;
  }
  throw 'email or password are invalid';
}

export async function checkAuthentication(req: Request, res: Response) {
  const emailaddress = req.body.emailaddress;
  const password = req.body.password;
  try {
    await canUserLogin(emailaddress, password);
    res.send(200);
  } catch {
    res.send(401);
  }
}

/************************************************************************************************/
// CONSTRUCTOR
export async function cookieHeader(req: Request, res: Response) {
  const cookies = new Cookies(req.headers.cookie);

  console.log(cookies.get('got Cookie'));
}

/************************************************************************************************/
// GET COOKIE
export async function getCookie(req: Request, res: Response) {}

/************************************************************************************************/
// SET / UPDATE COOKIE
export async function setCookie(req: Request, res: Response) {}

/************************************************************************************************/
// REMOVE / DELETE COOKIE
export async function deleteCookie(req: Request, res: Response) {}
