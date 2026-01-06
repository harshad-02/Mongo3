import Chat from "./models/chat.js";
import mongoose from "mongoose";

main().then(()=>{console.log("Connection Sccsessful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

Chat.insertMany([
  {
    from: "neha",
    to: "priya",
    msg: "Send me your exam sheets",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "neha",
    msg: "Sure, I will send them tonight",
    created_at: new Date()
  },
  {
    from: "rahul",
    to: "neha",
    msg: "Did you complete the assignment?",
    created_at: new Date()
  },
  {
    from: "neha",
    to: "rahul",
    msg: "Almost done, will submit soon",
    created_at: new Date()
  },
  {
    from: "amit",
    to: "priya",
    msg: "Are you coming to college tomorrow?",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "amit",
    msg: "Yes, morning lecture at 9",
    created_at: new Date()
  },
  {
    from: "sneha",
    to: "neha",
    msg: "Can you share yesterday's notes?",
    created_at: new Date()
  },
  {
    from: "neha",
    to: "sneha",
    msg: "I will upload them in the group",
    created_at: new Date()
  }
])
.then(res => console.log("Chats inserted:", res))
.catch(err => console.log(err));


