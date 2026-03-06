const verificationTemplate = (link) => {
  return `
  <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:40px;">
    <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:8px;">
      <h2 style="color:#4f46e5;">Verify Your Email</h2>
      <p>Thank you for signing up.</p>
      <p>Please click the button below to verify your email address.</p>

      <div style="text-align:center;margin:30px 0;">
        <a href="${link}" 
           style="background:#4f46e5;color:white;padding:12px 25px;
                  text-decoration:none;border-radius:6px;
                  display:inline-block;font-weight:bold;">
          Verify Email
        </a>
      </div>

      <p>This link will expire in 15 minutes.</p>
    </div>
  </div>
  `;
};


export default verificationTemplate