import { insertToMongo, sort, update,deleteD } from "../DAL/mongoD.js"
import { db } from "../DB/mongo.js"

const createMsg = async(req,res)=>{
    const data = req.body
    await insertToMongo(data)
}
const getAll = async(req,res)=>{
    const all =await sort()
    res.send(all)
}
const getMyMsgs= async(req,res)=>{
    const results = await db.collection("messages").find({$and:[{userId:req.params.userId},{username:req.headers.username}]}).toArray()
    if(!results){
        res.send("not your msgs")
    }
    res.send(results)
}
const updateContent = async(req,res)=>{
    const username =req.headers.username
    const id = req.params.id
    const content = req.body.content
    await update(id,username,content)
    res.send("updated")
    
}
const deleteContent = async(req,res)=>{
    const username =req.headers.username
    const id = req.params.id
    await deleteD(id,username)
    res.send("deleted")
    
}
export {
createMsg,
getAll,
getMyMsgs,
updateContent,
deleteContent
}