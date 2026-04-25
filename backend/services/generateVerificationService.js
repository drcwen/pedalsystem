const { Resend } = require("resend");
const { generateCode } = require("../utils/generateCode");

// temp storage (use DB in production)
let verificationStore = {};

const sendVerificationCode = async (req, res) => {
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { email } = req.body;

    const code = generateCode();

    verificationStore[email] = code;

    try {
        await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Your Verification Code",
        html: `
            <h2>Your verification code</h2>
            <h1 style="letter-spacing: 5px;">${code}</h1>
            <p>This code will expire in 5 minutes.</p>
        `,
        });

        res.json({ message: "Code sent" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const verifyCode = (req, res) => {
  const { email, code } = req.body;

  if (verificationStore[email] === code) {
    delete verificationStore[email];
    
    return res.json({ success: true });
  }

  res.status(400).json({ success: false, message: "Invalid code" });
};

module.exports = { sendVerificationCode, verifyCode, verificationStore };