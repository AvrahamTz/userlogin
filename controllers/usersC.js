import { insertTo } from "../DAL/supaD.js"

const register = async(req,res)=>{
    try {
        const insert =await insertTo(req.body.username,req.body.password)
        res.send(insert)
    } catch (error) {
        res.send(error)
        
    }
}

export{
register,


}