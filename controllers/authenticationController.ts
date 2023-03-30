import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';

import { AccountModel } from '../models/accountModel';

async function canUserLogin(emailaddress: string, password: string) {
  const account = await AccountModel.findOne({
    emailAddress: emailaddress,
    password: password,
  }).exec();

  if (account != null) {
    return true;
  }
  throw 'email or password is invalid';
}

export async function checkAuthentication(req: Request, res: Response) {
  const emailaddress = req.body.emailaddress;
  const password = req.body.password;
  try {
    await canUserLogin(emailaddress, password);
    if(process.env.JWTSECRET == undefined) {
      throw 'jtw secret not configured';
    }
    const token = jwt.sign({emailaddress}, process.env.JWTSECRET, { expiresIn: '1800s' });

    res.json(token);
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
