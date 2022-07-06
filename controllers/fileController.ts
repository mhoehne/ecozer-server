import { Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { resolve } from 'path';

/************************************************************************************************/
//GET / READ
export async function getFile(req: Request, res: Response) {
  res.sendFile(resolve(`upload/${req.params.filename}`));
}

export async function postFile(req: Request, res: Response) {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });
    } else {
      //Use the name of the input field (i.e. "file") to retrieve the uploaded file
      let file = req.files.file as UploadedFile;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      file.mv('./upload/' + file.name);

      //send response
      res.send({
        status: true,
        message: 'File is uploaded',
        name: file.name,
        mimetype: file.mimetype,
        size: file.size,
        url: `http://localhost:8000/files/${file.name}`,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
