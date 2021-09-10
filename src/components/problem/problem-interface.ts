import { bool } from "aws-sdk/clients/signer";


export interface I_New_Input_Problem {
  problem: I_New_Problem,
  issues: I_Connect_Issue[]
}

export interface I_Problem {
  
}

export interface I_New_Problem {
  owner_id: number
  account_id: number
  project_id?: number 
  description: string
}

export interface I_Connect_Issue {
  id: number
}

export interface I_Update_Problem {
  is_complete: boolean
}