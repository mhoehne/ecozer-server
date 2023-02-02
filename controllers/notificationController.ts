import { Request, Response } from 'express';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import { AccountModel } from '../models/accountModel';
import { NotificationModel } from '../models/notificationModel';

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
  // get notification by id and update to isRead=true
  // check if notification.accountID is equal to the loggedin account
  try {
    const notification = await NotificationModel.findOneAndUpdate(
      { _id: req.body.account_id },
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
