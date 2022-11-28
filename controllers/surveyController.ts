import { Request, Response } from 'express';
import mongoose, { model, Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

interface Survey {
  _id: number;
  role: string;
  companySize: string;
  corporateSector: string;
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  feedbackField: string;
  createdAt: Date;
}

export const surveySchema = new Schema<Survey>(
  {
    _id: { type: Number, required: true },
    role: { type: String, required: false },
    companySize: { type: String, required: false },
    corporateSector: { type: String, required: false },
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
// GET
export async function listSurveyEntries(req: Request, res: Response) {
  const sort: { [key: string]: number } = {};
  const query: {
    [key: string]: boolean | number | string | RegExp;
  } = {};
  let limit = (req.query.limit as string) ?? '';
  if (!limit.trim()) {
    limit = '100';
  }

  const surveyEntries = await SurveyModel.find(query)
    .sort(sort)
    .limit(parseInt(limit));

  res.send({ surveyEntries });
}

export async function getSurveyEntry(req: Request, res: Response) {
  const surveyEntry = await SurveyModel.findOne({
    _id: parseInt(req.params.id),
  });

  if (surveyEntry === null) {
    res.sendStatus(404);
    return;
  }

  res.send(surveyEntry);
}

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
