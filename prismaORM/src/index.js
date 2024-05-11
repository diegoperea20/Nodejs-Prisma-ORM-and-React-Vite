import express from "express";
import cors from "cors";
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(express.json());

// Habilita CORS para todas las rutas
app.use(cors());

app.use('/',tasksRoutes)

app.listen(3000)
console.log("Server running on port 3000")