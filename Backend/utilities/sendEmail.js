async function sendEmail(options){
    const transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });


      const message = {
        from: '"Grocery-app" <maddison53@ethereal.email>',
        to: options.email,
        subject: options.subject,
        text: options.message,
      };

      await transport.sendMail(message);
    }
    
    module.exports = sendEmail;