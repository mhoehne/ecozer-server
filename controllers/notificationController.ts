import { Request, Response } from 'express';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import { AccountModel } from '../models/accountModel';
import { NotificationModel, notificationSchema } from '../models/notificationModel';

export async function listNotifications(req: Request, res: Response) {
  const sort: { [key: string]: number } = {};
  if (req.query.sortBy === 'createdAt') {
    sort.createdAt = req.query.sortOrder === 'asc' ? 1 : -1;
  }

  const accountByEmailAddress = await AccountModel.findOne({
    emailAddress: req.cookies.email,
  });
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
  
  // how do I check if notification.accountID is equal to the loggedin account? I should do it before the const notification
  // const account = await AccountModel.findOne({
  //   emailAddress: req.cookies.email,
  // });

  // if (account === undefined || account?._id != account?.account_id) {
  //   res.status(401).send();
  //   return;
  // }

  try {
    const notification = await NotificationModel.findOneAndUpdate(
      
      // get notification by id and update to isRead=true
      { _id: req.body._id },
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
  // check account or product controller
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
