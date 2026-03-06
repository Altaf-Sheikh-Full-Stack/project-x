import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import verificationTemplate from "./template.js";


const sendEmail = async (req, res) => {
  try {
    const token = req.cookies.AuthToken;
    const decode = jwt.verify(token, process.env.JWT_KEY);
    const emailToken = jwt.sign({ id: decode.id }, process.env.JWT_KEY, { expiresIn: "10m" });


    const verificationLink = `http://localhost/emailVerify/${emailToken}`;

    const transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525,
      secure: false,
      auth: {
        user: "Email_server_1",
        pass: process.env.PASS,
      },
    });


    const info = await transporter.sendMail({
      from: '"Motion of Motion" <noreply@motionofmotion.com>',
      to: decode.email,
      subject: "Verify your email",
      text: `
Hi,

Please verify your email by clicking this link:
${verificationLink}

This link expires in 10 minutes.
      `,
      html: verificationTemplate(verificationLink),
    });

    console.log("Message sent:", info.messageId);

    return res.status(200).json({
      message: "Verification email sent successfully",
      email:decode.email
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to send email",
    });
  }
};

export default sendEmail;