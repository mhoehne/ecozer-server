import { Request, Response } from 'express';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

interface Survey {
  _id: number;
  account_id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  role: string;
  companySize: string;
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  feedbackField: string;
  createdAt: Date;
}

export const surveySchema = new Schema<Survey>(
  {
    account_id: { type: Number, required: true, immutable: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    emailAddress: { type: String, required: true },
    role: { type: String, required: false },
    companySize: { type: String, required: false },
    Q1: { type: String, required: false },
    Q2: { type: String, required: false },
    Q3: { type: String, required: false },
    Q4: { type: String, required: false },
    feedbackField: { type: String, required: false },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
surveySchema.plugin(autoIncrement.plugin, 'Survey');

export const SurveyModel = model<Survey>('Survey', surveySchema);

/************************************************************************************************/
//POST / CREATE
export async function createSurveyEntry(req: Request, res: Response) {
  const createNewSurveyEntry = new SurveyModel(req.body);

  try {
    await createNewSurveyEntry.save();
  } catch (e) {
    res.status(500).send(e);
    return;
  }

  return res.status(201).send(createNewSurveyEntry);
}

/************************************************************************************************/
//DELETE
export async function deleteSurveyEntry(req: Request, res: Response) {
  try {
    await SurveyModel.findOneAndDelete({
      _id: req.body._id,
    }).exec();
    return res.status(202).send('Survey entry successfully deleted');
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}
