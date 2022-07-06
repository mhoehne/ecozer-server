import { Request, Response } from 'express';
import { resolve } from 'path';

/************************************************************************************************/
//GET / READ
export async function getImage(req: Request, res: Response) {
  res.sendFile(resolve(`upload/${req.params.filename}`));
}
