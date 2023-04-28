import { Request, Response } from 'express';

import { Account, AccountModel } from '../models/accountModel';
import { findAll, findByEmail, storeAccount } from '../repositories/accountRepository';

/************************************************************************************************/
//GET / READ
export async function listAccount(_req: Request, res: Response) {
  const accounts = await findAll()

  res.send({ accounts });
}

export async function GetOneAccount(req: Request, res: Response) {
  const emailAddress = req.params.email
  const account = await findByEmail(emailAddress);
  if (account === null) {
    res.sendStatus(404);
    return;
  }

  res.send({ account });
}

/************************************************************************************************/
//POST / CREATE
export async function createAccount(req: Request, res: Response) {
  const createNewAccount: Account = Object.assign({}, {...req.body})

  try {
    await storeAccount(createNewAccount);
  } catch (e) {
    res.status(500).send('account already exists');
    return;
  }

  const emailAddress = req.body.emailAddress;
  const account = await findByEmail(
    emailAddress
  );
  return res.status(201).send(account);
}

/************************************************************************************************/
//PUT / UPDATE
export async function updateAccount(req: Request, res: Response) {
  try {
    const account = await AccountModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    ).exec();
    return res.status(202).send(account);
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}

/************************************************************************************************/
//DELETE
export async function deleteAccount(req: Request, res: Response) {
  try {
    await AccountModel.findOneAndDelete({
      emailAddress: req.body.emailAddress,
    }).exec();
    return res.status(202).send('account successfully deleted');
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}
