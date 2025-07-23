import express from "express"
import { getMessages,addMessages } from "../controller/messagesController.js"

const router = express.Router()

router.get("/:userId/messages/:contactId",getMessages)
router.post("/:userId/messages/:contactId",addMessages)

export default router