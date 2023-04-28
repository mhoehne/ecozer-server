import { Account, AccountModel, accountSchema } from '../models/accountModel';

export async function findAll () {
  const accounts = await AccountModel.find({});
  return accounts;
}

export async function findByEmail(emailAddress: string) {
  const account = await AccountModel.findOne({
    emailAddress
  });
  
  return account;
}

export async function storeAccount(input:Account): Promise<Account> {
  const {account_id, ...changedFields} = input;

  if (account_id !== undefined) {
    const account = await AccountModel.findOneAndUpdate(
      {account_id},
      changedFields,
      {new: true}
    );

    if (account === null) {
      throw new Error (
        `Could not update account ${account_id} because it was not found.`
      )
    }
    return account;
  }
  
  return await new AccountModel(changedFields).save();
}
