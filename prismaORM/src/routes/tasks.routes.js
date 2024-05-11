import { Router } from "express";
import {prisma} from "../db.js";
const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks =await prisma.task.findMany()
        
    res.json(tasks)
})

router.post('/tasks', async (req, res) => {
    const taskNew = await prisma.task.create({
        data: req.body
    })
    res.json(taskNew)
})

router.get('/tasks/:id', async (req, res) => {
    const task = await prisma.task.findFirst({
        where: {
            id: parseInt(req.params.id)
        },
    });

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
})

router.delete('/tasks/:id', async (req, res) => {
    const taskDeleted = await prisma.task.delete({
        where: {
            id: parseInt(req.params.id)
        },
    });

    if (!taskDeleted) {
        return res.status(404).json({ message: "Task not found" });
    }
    return res.json(taskDeleted);
})


router.put('/tasks/:id', async (req, res) => {
    const taskUpdated = await prisma.task.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    });

    
    return res.json(taskUpdated);
})


export default router;