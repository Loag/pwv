// when email is involved, transactional or marketing
import mailchimp_marketing from '@mailchimp/mailchimp_marketing'
const mailchimp_transactional = require('mailchimp_transactional')(process.env.mc_trans_key);
const EventEmitter = require('events')
import { logger } from "../../utils/logging";

export interface Send_Mail {
  to: string
  subject: string
  text: string
}

export interface NewSignup_Mail {
  firstName: string
  lastName: string
  email: string
}

export const add_contact_email = async (input: NewSignup_Mail) => {
  logger.info("Adding contact email called")

  mailchimp_marketing.setConfig({
    apiKey: process.env.mc_marketing_key,
    server: 'us5',
  });

  const listId = process.env.list_id;
  
  const response = await mailchimp_marketing.lists.addListMember(listId, {
    email_address: input.email,
    status: mailchimp_marketing.Status.subscribed,
    merge_fields: {
      FNAME: input.firstName,
      LNAME: input.lastName
    }
  });

  return response
}

export const send_email = async (input: Send_Mail) => {
    logger.info("Sending Transactional email")

    const message = {
      from_email: process.env.sender_email,
      subject: input.subject,
      text: input.text,
      to: [
        {
          email: input.to,
          type: "to"
        }
      ]
    };
    
    const response = await mailchimp_transactional.messages.send({
      message
    });

    return response
}

const err_catcher = (fn: any, error_message: string) => () => {
  Promise.resolve(fn()).catch(err => {
    logger.error(`${error_message}: ${err}`)
  });
};

export const eventEmitter = new EventEmitter()

// signup a new user
eventEmitter.on('email_signup', async (signup_email: NewSignup_Mail) =>  {
  const res = await err_catcher(add_contact_email(signup_email), "Failed to signup user with error")
  logger.info("Email sign up process completed.")
});

// send transactional email
eventEmitter.on('transactional_email', async (email_data: Send_Mail) => {
  const res = await err_catcher(send_email(email_data), "Failed to send transactional email with error")
  logger.info("Email transactional process completed.")
});