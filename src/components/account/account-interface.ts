import { I_User } from "../user/user-interface";
/*
  ts interface for the account objects
*/

export interface I_Account {
  id: number
  account_id: string

  name: string
  address: string
  city: string

  users: I_User[]

  createdAt: string
  updatedAt: string
}

export interface I_New_Account {
  name: string
  address: string
  city: string 
}