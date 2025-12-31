import { ObjectId } from "bson"
import { db } from "../DB/mongo.js"

const insertToMongo= async ({userId,username,content})=>{
    const data = {
        userId,
        username,
        content,
        createdAt: Date(),
        upadatedAt:new Date()
    }
    await db.collection("messages").insertOne(data)
}
const sort =async  ()=>{
 const msgs = await db.collection("messages").find().sort({createdAt:-1}).toArray() 
 return msgs  
}
const update = async(_id,username,content)=>{
    await db.collection("messages").update({$and:[{_id:new ObjectId(_id)},{username:username}]},{$set:{content:content,upadatedAt:new Date()}})
}
const deleteD = async(_id,username)=>{
    await db.collection("messages").deleteOne({$and:[{_id:new ObjectId(_id)},{username:username}]})
}

export{
    insertToMongo,
    sort,
    update,
    deleteD
}
