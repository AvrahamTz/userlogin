import supa from "../DB/supa.js";

export const validateUser = async (req, res,next) => {
try {
        const {username,password} = req.headers
        const { data, error } = await supa.from('users').select().eq('username',username).eq('password',password)
        if (error) {
            console.log("data",error);
            
        }
        if (data){
            next()
            if (next === null){
            res.json("login sucsseful")
            }
            
        }else{
           res.send( "Wrong username or password")   
        }    
    }catch (error){ 
    console.error(error);
    }
    
}