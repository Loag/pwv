import {I_Issue} from "../issue/issue-interface";
import {I_User} from "../user/user-interface";

export interface I_New_task {
  user_id: number
  issue_id: number
  problem_id?: number // can create a task connected to a problem
  project_id?: number // can create a task connected to a project
}

export interface I_Task {
  id: number

  user: I_User
  issue: I_Issue

  is_completed: boolean

  time: number
  
  status: "NEW" | "COMPLETE"

  createdAt: string
  updatedAt: string
}

export interface I_Update_task {
  id?: number
  time?: number
  is_completed?: boolean
}

export interface I_New_task_Note {
  user_id: number
  task_id: number

  text: string
  time: number
}