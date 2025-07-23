import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import usersRoutes  from "./routes/usersRoutes.js"
import messagesRoutes  from "./routes/messagesRoutes.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js" 


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json())

app.use("/auth",authRoutes)
app.use("/users",usersRoutes)
app.use("/users",messagesRoutes)


app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})