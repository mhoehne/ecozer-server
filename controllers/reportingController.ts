import { Request, Response } from 'express';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

interface Reporting {
  _id: number;
  name: string;
  emailAddress: string;
  issue: string;
  browser: string;
  pageName: string;
  feedbackField: string;
  createdAt: Date;
}

export const reportingSchema = new Schema<Reporting>(
  {
    name: { type: String, required: false },
    emailAddress: { type: String, required: true },
    issue: { type: String, required: false },
    browser: { type: String, required: false },
    pageName: { type: String, required: false },
    feedbackField: { type: String, required: false },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
reportingSchema.plugin(autoIncrement.plugin, 'Reporting');

export const ReportingModel = model<Reporting>('Reporting', reportingSchema);

/************************************************************************************************/
//POST / CREATE
export async function createReportingEntry(req: Request, res: Response) {
  const createNewReportingEntry = new ReportingModel(req.body);

  try {
    await createNewReportingEntry.save();
  } catch (e) {
    res.status(500).send(e);
    return;
  }

  return res.status(201).send(createNewReportingEntry);
}

/************************************************************************************************/
//DELETE
export async function deleteReportingEntry(req: Request, res: Response) {
  try {
    await ReportingModel.findOneAndDelete({
      _id: req.body._id,
    }).exec();
    return res.status(202).send('Report successfully deleted');
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}
