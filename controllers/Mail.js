const nodemailer = require("nodemailer");




 const SendMail = async (req ,res) =>{
    
    const {to ,  subject , text} = req.body



    const transporter = nodemailer.createTransport({
      service: "gmail",
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "yoganandimihir9313@gmail.com",
          pass: "lttj htoo pzud qlyc",
        },
      });
 
  const info = await transporter.sendMail({
    from: "yoganandimihir9313@gmail.com" , // sender address
    to:to, // list of receivers
    subject:subject, // Subject line
    text:text, // plain text body
   
  });

  console.log("Message sent: %s", info);
   res.json(info)
 

  const mail =  await transporter.sendMail(info);
return mail;
  
}

module.exports = {
    SendMail
}

