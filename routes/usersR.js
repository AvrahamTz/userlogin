import express from "express"
import { register } from "../controllers/usersC.js"
import { validateUser } from "../services/userside.js"


const router= express.Router()

router.post("/register",register)
router.post("/login",validateUser)
export default router