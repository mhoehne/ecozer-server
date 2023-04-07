import { Request, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { send } from 'process';

import { AccountModel } from '../models/accountModel';
import { NotificationModel, notificationSchema } from '../models/notificationModel';

export async function listNotifications(req: Request, res: Response) {
  const sort: { [key: string]: number } = {};
  if (req.query.sortBy === 'createdAt') {
    sort.createdAt = req.query.sortOrder === 'asc' ? 1 : -1;
  }

  // check all other endpoints and adjust the code to the following
  const token = req.headers.authorization ?? ''
  let tokenpayload = null
  try {
  tokenpayload = jwt.verify(token, `${process.env.JWTSECRET}`) as {emailaddress: string}
  } catch (err) {
  res.status(401).send();
  return;
  }
  
    const accountByEmailAddress = await AccountModel.findOne({
      emailAddress: tokenpayload['emailaddress'],
    });

    // check end

  if (accountByEmailAddress === null) {
    res.sendStatus(401);
    return;
  }

  const notifications = await NotificationModel.find({
    account_id: accountByEmailAddress?._id,
  });

  res.status(200).send({ notifications });
}

export async function markAsReadNotification(req: Request, res: Response) {

const token = req.headers.authorization ?? ''
let tokenpayload = null
try {
tokenpayload = jwt.verify(token, `${process.env.JWTSECRET}`) as {emailaddress: string}
} catch (err) {
res.status(401).send();
return;
}

  const account = await AccountModel.findOne({
    emailAddress: tokenpayload['emailaddress'],
  });

  const notification = await NotificationModel.findOne({
    _id: req.params.id
  })

  if (account === null || account?._id != notification?.account_id ) {
    res.status(401).send();
    return;
  }

  try {
    const notification = await NotificationModel.findOneAndUpdate(
      
      { _id: req.params.id },
      { isRead: true },
      { new: true }
    ).exec();
    return res.status(202).send(notification);
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}

export async function deleteNotification(req: Request, res: Response) {
  try {
    await NotificationModel.findOneAndDelete({
      _id: req.body._id,
    }).exec();
    return res.status(202).send('notification successfully deleted');
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}
