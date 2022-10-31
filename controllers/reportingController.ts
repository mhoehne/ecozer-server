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
// GET
export async function listReportings(req: Request, res: Response) {
  const sort: { [key: string]: number } = {};
  const query: {
    [key: string]: boolean | number | string | RegExp;
  } = {};
  let limit = (req.query.limit as string) ?? '';
  //parseInt(' '.trim() ?0:1) weird error on production
  if (!limit.trim()) {
    limit = '100';
  }

  const reportings = await ReportingModel.find(query)
    .sort(sort)
    .limit(parseInt(limit));

  res.send({ reportings });
}

export async function getReport(req: Request, res: Response) {
  const report = await ReportingModel.findOne({
    _id: parseInt(req.params.id),
  });

  if (report === null) {
    res.sendStatus(404);
    return;
  }

  res.send(report);
}

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
