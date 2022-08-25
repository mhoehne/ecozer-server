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
    {
      isAdmin: false,
      emailAddress: 'martin.user1@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user2@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user3@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user4@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user5@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user6@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user7@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user8@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user9@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user10@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user11@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user12@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user13@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user14@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user15@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user16@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user17@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user18@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user19@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user20@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user21@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user22@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user23@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user24@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user25@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user26@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user27@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user28@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user29@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
    },
    {
      isAdmin: false,
      emailAddress: 'martin.user30@domain.com',
      password: 'user1234',
      firstName: 'Martin',
      lastName: 'UserTest',
      companyName: 'Test User Company',
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
