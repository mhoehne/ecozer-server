import { Request, Response } from 'express';
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { AccountModel } from './accountController';

export async function listNotification(req: Request, res: Response) {
  const sort: { [key: string]: number } = {};
  if (req.query.sortBy === 'createdAt') {
    sort.createdAt = req.query.sortOrder === 'asc' ? 1 : -1;
  }
}

export async function createNotification(req: Request, res: Response) {}

export async function deleteNotification(req: Request, res: Response) {}
