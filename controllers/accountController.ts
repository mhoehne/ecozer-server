import { Request, Response } from 'express';
import { Schema, model, connect } from 'mongoose';

interface Account {
  emailAddress: string;
  password: string;
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
}

const accountschema = new Schema<Account>({
  emailAddress: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String, required: true },
  lastLogin: { type: String, required: false },
});

const AccountModel = model<Account>('Account', accountschema);



export async function listAccount(_req: Request, res: Response){

  const accounts = await AccountModel.find({});

  
res.send({accounts});
}

export async function createAccount(req: Request, res: Response){

  const createNewAccount = new AccountModel(req.body)
  
  try {
    await createNewAccount.save();
  }

  catch (e) {
    res.status(500).send('account already exists')
    return
  }
  
  const account = await AccountModel.findOne({ emailAddress: req.body.emailAddress }).exec();
  return res.status(201).send(account);
}