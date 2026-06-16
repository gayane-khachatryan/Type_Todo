import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./src/routes/todoRoutes.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3002;

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
    res.status(200).json({message: " API is running"});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
