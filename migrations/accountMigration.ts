import 
{ 
  Response, 
  Request 
} from 'express';
import 
{ 
  AccountModel, 
  accountSchema
} from '../controllers/accountController';

export default async function accountMigration(req: Request, res: Response){

  const accounts = [
      {

      }
    ]

for (const account of accounts) {
  
  const createNewAccount = new AccountModel(account)
    
    accountSchema.pre("save", function (next) {
      this.updatedAt = Date.now()
      next()
    })
  
    try {
      await createNewAccount.save();
    }
  
    catch (e) {
      console.error(e)
      return
    }
  
  }
  res.send();
}