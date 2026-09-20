let mongoose=require("mongoose");
let express =require("express");
let app= express();
const path=require("path");
let methodOverride=require("method-override");
const Chat = require("./models/chat");
let port=8080;
main()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsappclone');
};
//! Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//! Routs
app.get("/",(req,res)=>{
    res.send("jai peeran di");
})

app.get("/chats/new",(req,res)=>{
res.render("new.ejs");
})

app.post("/chats", async (req,res)=>{
    let {from,msg,to}=req.body;
    let newchat=new Chat({
from: from,
message:msg,
To:to
    })
      await  newchat.save();
   res.redirect("/chats");
});

app.get("/chats", async (req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats})
});

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params;
     let {msg}=req.body;
    let updatedChat= await Chat.findByIdAndUpdate(id,{message:msg},{runValidators:true,new:true});
res.redirect("/chats");
})
app.delete("/chats/:id",async(req,res)=>{
let {id}=req.params;
let deletechat=await Chat.findByIdAndDelete(id);
  console.log(deletechat);
res.redirect("/chats");
});
// let chat1=new Chat({
//     from: "Devender singh",
//     To:"Gosha"
// });
// chat1.save();



app.listen(port,()=>{
    console.log("app is listening on port 8080");
});
