"use server";

import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const receiver = process.env.EMAIL_RECEIVER;

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method == "POST") {
    const data = req.body;
    if (data && data.value) {
      const { value } = data;

      try {
        let transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: 465,
          secure: true,
          auth: {
            user: process.env.SMTP_USER, // email address
            pass: process.env.SMTP_PASS, //  email password
          },
        });
        await transporter.sendMail({
          from: "Website Form", // sender address
          to: receiver, //  email address to receive data
          subject: `New Contact Form Submission from ${value.fullname}`,
          html: `<p>You have a new contact form submission</p>
               <p><strong>Name: </strong> ${value.fullname}</p>
               <p><strong>Phone: </strong> ${value.phonenumber}</p>
                  <p><strong>Email: </strong> ${value.emailAddress}</p>
               <p><strong>City: </strong> ${value.city}</p>
               <p><strong>Message: </strong> ${value.textarea}</p>`,
        });
        // Send a success response
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        // Send an error response
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      // Send a bad request response if data is invalid
      res.status(400).json({ error: "Invalid data format" });
    }
  } else {
    // Send a method not allowed response for non-POST requests
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
