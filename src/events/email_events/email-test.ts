import {add_contact_email, Send_Mail, NewSignup_Mail} from "./email";

const signup_data: NewSignup_Mail = {
  firstName: "Demo",
  lastName: "User",
  email: process.env.sender_email
}