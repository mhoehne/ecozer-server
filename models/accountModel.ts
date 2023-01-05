import mongoose, { model, Schema } from 'mongoose';
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
  acceptedTermAndConditions: boolean;
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
    acceptedTermAndConditions: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
accountSchema.plugin(autoIncrement.plugin, 'Account');
export const AccountModel = model<Account>('Account', accountSchema);
