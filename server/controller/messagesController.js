import db from "../database.js"
import {v4 as uuid4} from "uuid"

export const getMessages = async (req,res,next) => {
    const {userId, contactId} = req.params
    try {
        const [rows] = await db.query("SELECT * FROM messages WHERE userId = ? and contactId = ? ORDER BY createdAt",[userId,contactId])
        res.status(200).json({messages : rows})
    } catch (err) {
        next(err)
    }
}

export const addMessages = async (req,res,next) => {
    const {userId, contactId} = req.params
    const {message} = req.body 
    try {
        const messageId = uuid4()
        await db.query("INSERT INTO messages (id,userId,contactId,content) VALUES (?,?,?,?)",[messageId,userId,contactId,message])
        res.status(200).json({messages : "Messages added" , message})
    } catch (err) {
        next(err)
    }
}