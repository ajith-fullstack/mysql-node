import express from "express";
import { getUsers, getUser, createUser} from "./database.js";
const app = express();
app.use(express.json());

app.get("/users",async (req,res)=>{
    const result  = await getUsers();
    res.send(result);
})

app.get("/users/:id",async (req,res)=>{
    const id = req.params.id;
    const result  = await getUser(id);
    res.send(result);
})

app.post("/users",async (req,res)=>{
    const {name,email} = req.body;
    const result  = await createUser(name,email);
    res.status(201).send(result);
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})