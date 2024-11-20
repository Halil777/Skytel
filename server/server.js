const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/send", async (req, res) => {
  const options = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "mailsenderofgeekspace@gmail.com",
      pass: "uvtujsdspbtqhydv",
    },
  });
  const mailOptions = {
    from: "mailsenderofgeekspace@gmail.com",
    to: "microst7779@gmail.com",
    subject:
      'Somebody "Sky Telecom" administratsiýasy bilen habarlaşmak isleýär',
    text: `ADY: ${options.name},\n EMAIL: ${options.email}, \n HATY: ${options.message}`,
  };
  await transporter.sendMail(mailOptions);
  console.log("Success");
  return res.send("Success");
});
app.listen("8080", () => {
  console.log("Listening on 8080");
});
// 792132719064 - vq0mdu7vvc7739lnvnnbs6dvc5hvn0an.apps.googleusercontent.com
// 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
