let mongoose=require("mongoose");
const chatSchema=new mongoose.Schema({
    from :{
        type:String,
        required:true
    },
    message:{
        type: String,
        default:"hello"
    },
    To:{
        type:String,
        required:true
    }
});
let Chat =mongoose.model("Chat", chatSchema);
module.exports=Chat;