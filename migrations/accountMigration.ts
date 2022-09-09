import { Response, Request } from 'express';
import { AccountModel, accountSchema } from '../controllers/accountController';

export default async function accountMigration(req: Request, res: Response) {
  const accounts = [
    {
      isAdmin: true,
      emailAddress: 'martin+admin@domain.com',
      password: 'Admin1234',
      firstName: 'Martin',
      lastName: 'AdminTest',
      companyName: 'Test Admin Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin+user@domain.com',
      password: 'User1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: true,
      emailAddress: 'Rosemarie.Baehne+admin@student.htw-berlin.de',
      password: 'AdminBaehne123',
      firstName: 'Rosemarie',
      lastName: 'Bähne',
      companyName: 'RB Admin Company',
    },
    {
      isAdmin: false,
      emailAddress: 'Rosemarie.Baehne+user@student.htw-berlin.de',
      password: 'UserBaehne123',
      firstName: 'Rosemarie',
      lastName: 'Bähne',
      companyName: 'RB User Company',
    },
  ];

  const checkAccount = [];

  for (const account of accounts) {
    const createNewAccount = new AccountModel(account);

    accountSchema.pre('save', function (next) {
      this.updatedAt = Date.now();
      next();
    });
    const saveAccount = createNewAccount.save();
    checkAccount.push(saveAccount);
  }
  try {
    await Promise.all(checkAccount);
  } catch (e) {
    console.error(e);
  }

  res.send();
}
