import db from '../database.js'
import {v4 as uuidv4} from "uuid"


export const getContact =  async (req,res,next) => {
    const userId = req.params.userId   
    try {
        const [rows] = await db.query("SELECT * FROM contacts WHERE userID = ?",[userId])
        res.status(200).json(rows)
    } catch (err) {
        next(err)
    }
}


export const addContact = async (req,res,next) => {
    const userId = req.params.userId   
    const {contactName, contactEmail} = req.body
    try {
        const [rows] = await db.query("SELECT * FROM contacts WHERE userID = ? and contactName = ?",[userId,contactName])
        if (rows.length >= 1) return res.status(409).json({ message : "Contact with this name exists"})
        
        const contactId = uuidv4()

        await db.query("INSERT INTO contacts (id,userId, contactName, contactEmail) VALUES (?, ?, ?, ?)",[contactId,userId, contactName, contactEmail])

        res.status(200).json({message : "Contact added" , contact : {contactId,userId,contactName,contactEmail}})
        
    } catch (err) {
        next(err)
    }
}

export const deleteContact = async (req,res,next) => {
    const contactId = req.params.contactId
    try {
        const [rows] = await db.query("SELECT * FROM contacts WHERE id = ?",[contactId])
        if (rows.length === 0){
            return res.status(400).json({ message: "Contact not found." });
        }
        await db.query("DELETE FROM contacts WHERE id = ?",[contactId])
        res.status(200).json({ message: "Contact deleted successfully." });
    } catch (err) {
        next(err)
    }
}