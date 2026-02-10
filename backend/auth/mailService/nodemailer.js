import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const emailService = (email) => {
  
  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    secure: false, // Use true for port 465, false for port 587
    auth: {
      user: "Email_server_1",
      pass: process.env.PASS
    },
  });



  // Send an email using async/await
  const main = async () => {
    try {
      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch" <noreplay@motionofmotion.com>',
        to: email,
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
      });

      if (info.messageId) {
        console.log("Message sent:", info.messageId)
      } else {
        console.log("cant send eamil")
      }
      console.log();
      console.log(info)

    }catch(err){
      console.log(err)
    }
  }

  main()
}

export default emailService