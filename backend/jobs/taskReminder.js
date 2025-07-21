const cron = require("node-cron");
const Task = require("../models/taskSchema");
const User = require("../models/userSchema");
const transporter = require("../config/mailer");

cron.schedule("* * * * *", async () => {
//   console.log(`Cron job run at ${new Date().toLocaleTimeString()}`);

  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

  try {
    const tasks = await Task.find({
      date: { $gte: now, $lte: oneHourLater },
      reminderSent: false,
    });

    for (let task of tasks) {
      const user = await User.findById(task.createdBy);

      if (!user || !user.email) {
        console.log(`❌ No email found for user ${task.createdBy}`);
        continue;
      }

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: `Reminder: ${task.title}`,
        text: `Hi! Your task "${task.title}" is due at ${task.date}.`,
      });
      task.reminderSent = true;
      await task.save();
    //   console.log(`✅ Reminder sent to ${user.email} for task "${task.title}"`);
    }
  } catch (error) {
    console.error(`Error in cron job `, error.message);
  }
});
