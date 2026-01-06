import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import Chat from "./models/chat.js";
import mongoose from "mongoose";
import methodOverride from "method-override";

// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));




main().then(()=>{console.log("Connection Sccsessful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}


//idex route

app.get("/chats" , async (req , res)=>{
    let chats = await Chat.find();
    res.render("index.ejs" , {chats});
})

app.get("/" , (req , res)=>{
    res.send("Root is Working");
});


app.get("/chats/new" , (req , res)=>{
    res.render("new.ejs");
});

app.post("/chats" , (req , res)=>{
    let {from , to , msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then(res =>{
        console.log("Chat was saved")
    })
    .catch(err =>{console.log(err);
    });
    res.redirect("/chats");
});


//edit route

app.get("/chats/:id/edit" , async (req , res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
});

//update route

app.put("/chats/:id" , async (req , res)=>{
    let { id } = req.params;
    let { msg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id , {msg : msg} , {runValidators:true , new:true});
    console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy route
app.delete("/chats/:id" , async (req , res)=>{
    let { id } = req.params;
    let DeletedChat = await Chat.findByIdAndDelete(id);
    console.log(DeletedChat);
    res.redirect("/chats");
});

app.listen(8080 , () =>{
    console.log("Server is listening on port 8080");
});