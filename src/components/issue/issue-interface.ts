import {I_Task} from "../task/task-interface";

export interface I_New_Issue {
    user_id: number 
    problem_id?: number
    share_url: string
    description: string 

    thumb_nail: string 
    video_link: string 
  
    lat: string 
    long: string 

    city: string
    address: string
}

export interface I_Issue {
  id: number
  user_id: number // user who created issue
  problem_id?: number

  share_url: string // how to find issue from outside app

  description: string // issue description

  thumb_nail: string 
  video_link: string 

  lat: string 
  long: string 

  city: string

  address: string
  
  tasks?: I_Task

  status: "NEW" | "COMPLETE"

  createdAt: string
  updatedAt: string
}
