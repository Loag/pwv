
export interface I_New_User {
  name: string
  internal_id: string
  email: string
  phoneNumber: string
  image: string
  zip: string
  address?: string // will be moving away from this is prod
  role: "RESIDENT" | "EMPLOYEE"
  accepted_tos: boolean
  accepted_privacy: boolean
  is_over_thirteen: boolean
}

export interface I_Update_User {
  name: string
  email?: string
  phone?: string
  address?: string
}

export interface I_User {
  id: number
  user_id: string

  internal_id: string
  
  account_id: number

  role: "RESIDENT" | "EMPLOYEE"

  // issues: Issue[] // a user has many tasks 

  // tasks: Task[] // a user has many issues

  last_login: string

  createdAt: string
  updatedAt: string
}
