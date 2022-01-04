import { Request, Response } from 'express';

export default function accountController(_req: Request, res: Response)

{
const accounts = {
  "accounts" : [
    {
      "id": 0,
      "emailAddress": "account0@email-test.com",
      "title": "TitleTest",
      "firstName": "FirstNameTest",
      "lastName": "LastNameTest",
      "companyName": "CompanyNameTest",
      "lastLogin": "00-12-2021"
    },

    {
      "id": 1,
      "emailAddress": "admin@email.com",
      "title": "Mister",
      "firstName": "AdminFirstName",
      "lastName": "AdminLastName",
      "companyName": "AdminCompanyName",
      "lastLogin": "01-12-2021"
    },

    {
      "id": 2,
      "emailAddress": "ironman@email.com",
      "title": "Lord",
      "firstName": "Tony",
      "lastName": "Stark",
      "companyName": "Stark Industries",
      "lastLogin": "02-12-2021"
    },

    {
      "id": 3,
      "emailAddress": "batman@email.com",
      "title": "Sir",
      "firstName": "Bruce",
      "lastName": "Wayne",
      "companyName": "Wayne Enterprises",
      "lastLogin": "03-12-2021"
    }
  ]
}

res.send(accounts);
}