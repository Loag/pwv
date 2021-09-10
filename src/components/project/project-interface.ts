import {I_User} from "../user/user-interface";
import { I_Task } from "../task/task-interface";
import {I_Problem} from "../problem/problem-interface";

export interface I_New_project {
  owner_id: number // the person creating/owning the project

  account_id?: number

  description: string

  problems?: I_Problem[]
  tasks?: I_Task[]
}

export interface I_Project {
  id: number

  owner: I_User

  description: string

  // problems Problem[]
  // tasks Task[]

  is_completed: boolean  
  status: "NEW" | "COMPLETE"

  createdAt: string
  updatedAt: string
}

export interface I_Update_Project {
  id: number
  is_completed?: boolean
}

export interface I_Project_Connect {
  id: number
}

export interface I_Update_Project_Input {
  project: I_Update_Project,
  tasks?: {id: string}[]
}