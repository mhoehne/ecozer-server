import { Request, Response } from 'express';
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

interface Account {
  account_id: number;
  isAdmin: boolean;
  emailAddress: string;
  password: string;
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  createdAt: Date;
  updatedAt: Date;
}

export const accountSchema = new Schema<Account>(
  {
    isAdmin: { type: Boolean, required: false, default: false },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true, minlength: 8 },
    title: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: true },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
accountSchema.plugin(autoIncrement.plugin, 'Account');
export const AccountModel = model<Account>('Account', accountSchema);

/************************************************************************************************/
//GET / READ
export async function listAccount(_req: Request, res: Response) {
  const accounts = await AccountModel.find({});

  res.send({ accounts });
}

export async function GetOneAccount(req: Request, res: Response) {
  const account = await AccountModel.findOne({
    emailAddress: req.params.email,
  });
  if (account === null) {
    res.sendStatus(404);
    return;
  }

  res.send({ account });
}

export async function GetOneAccountByID(req: Request, res: Response) {
  const account = await AccountModel.findOne({
    accountID: req.params.account_id,
  });
  if (account === null) {
    res.sendStatus(404);
    return;
  }

  res.send({ account });
}

/************************************************************************************************/
//POST / CREATE
export async function createAccount(req: Request, res: Response) {
  const createNewAccount = new AccountModel(req.body);

  accountSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });

  try {
    await createNewAccount.save();
  } catch (e) {
    res.status(500).send('account already exists');
    return;
  }

  const account = await AccountModel.findOne({
    emailAddress: req.body.emailAddress,
  }).exec();
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
