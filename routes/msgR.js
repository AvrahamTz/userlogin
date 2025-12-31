import express from "express"
import { validateUser } from "../services/userside.js"
import { createMsg, deleteContent, getAll, getMyMsgs, updateContent } from "../controllers/msgC.js"

const router= express.Router()

router.post("/",validateUser,createMsg)
router.get("/",validateUser,getAll)
router.get("/user/:userId",validateUser,getMyMsgs)
router.put("/:id",validateUser,updateContent)
router.delete("/:id",validateUser,deleteContent)
export default router