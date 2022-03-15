import { Response, Request } from 'express';
import { AccountModel, accountSchema } from '../controllers/accountController';

export default async function accountMigration(req: Request, res: Response) {
  const accounts = [
    {
      isAdmin: true,
      emailAddress: 'martin.admin@domain.com',
      password: 'admin1234',
      firstName: 'Martin',
      lastName: 'AdminTest',
      companyName: 'Test Admin Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
  ];

  for (const account of accounts) {
    const createNewAccount = new AccountModel(account);

    accountSchema.pre('save', function (next) {
      this.updatedAt = Date.now();
      next();
    });

    try {
      await createNewAccount.save();
    } catch (e) {
      console.error(e);
      return;
    }
  }
  res.send();
}
