import { Request, Response, Router } from "express";
import { Todo } from "../models/todos";

const todoRouter = Router();

//GET /todos -> get all todos from database
todoRouter.get("/todos", async (req: Request, res: Response) => { 
    const todos = await Todo.find();
    res.json(todos);   
});

//POST /todos -> create new todo
todoRouter.post("/todos", async (req: Request, res: Response) => { 
    try {
        const newTodo = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            status: false,
        });
    
        res.json(newTodo);
    } catch(error) {
        res.status(500).json({
            message: "Something went wrong... please try again."
        })
    }
});

//PUT /todos/:id -> update a todo
todoRouter.put("/todos/:id", (req: Request, res: Response) => { 
    res.send("Accessed PUT /todos");
});

//DELETE /todos/:id -> delete a todo
todoRouter.delete("/todos/:id", (req: Request, res: Response) => { 
    res.send("Accessed DELETE /todos");
});

//export the router to use in server.ts

export { todoRouter };