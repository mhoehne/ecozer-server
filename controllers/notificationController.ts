import { Request, Response } from 'express';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import { AccountModel } from '../models/accountModel';

interface Notifications {
  _id: number;
  account_id: number;
  productName: string;
  message: string;
  messageType:
    | 'pending'
    | 'published'
    | 'unpublished'
    | 'rejected'
    | 'assigned';
  rejectReason: string | null;
  createdAt: Date;
  isRead: boolean;
}

export const notificationSchema = new Schema<Notifications>(
  {
    account_id: { type: Number, required: true, immutable: true },
    productName: { type: String, required: true },
    message: { type: String, required: false, default: () => '' },
    messageType: { type: String, required: true },
    rejectReason: { type: String, required: false, default: () => '' },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    isRead: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
);

autoIncrement.initialize(mongoose.connection);
notificationSchema.plugin(autoIncrement.plugin, 'Notification');
export const NotificationModel = model<Notifications>(
  'Notification',
  notificationSchema
);

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

export async function markAsReadNotification(req: Request, res: Response) {}

export async function deleteNotification(req: Request, res: Response) {}
