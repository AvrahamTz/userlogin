import supa from "../DB/supa.js"

export const insertTo= async(username,password)=>{
    const { data, error } = await supa.from('users').insert({username:username,password:password}).select()
        if (data) {
            return "sucsses"
        }else{
           return {
            err: error.code,
            msg: error.message
           }
        }
    
     }

