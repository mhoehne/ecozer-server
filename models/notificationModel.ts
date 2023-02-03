import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

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