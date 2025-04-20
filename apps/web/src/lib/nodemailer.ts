const nodemailer = require("nodemailer");






export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "spl.sp999@gmail.com", 
      pass: "wquf mrij jcvn qamh" 
    }
  });
  


