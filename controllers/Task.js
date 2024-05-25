const Task = require("../models/Task")

exports.Create = async(req,res)=>{
    try{
        const { title, description, status, dueDate } = req.body;
        const newTask = new Task({ title, description, status, dueDate });
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Cannot Create Entry"
        })
    }
}

exports.getAll = async(req,res)=>{
    try{
        const tasks = await Task.find();
       return res.status(200).json(tasks);
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Cannot get Task"
        })
    }
}

exports.getById = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        return res.status(200).json(task);
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Cannot get task"
        })
    }
}

exports.update = async(req,res)=>{
    try{
        const { title, description, status, dueDate } = req.body;

       const updatedTask = await Task.findByIdAndUpdate(
       req.params.id,
      { title, description, status, dueDate },
      { new: true }
      );
    return res.status(200).json(updatedTask);
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"cannot update the task"
        })
    }
}

exports.Delete = async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        return res.status(204).json({ message: 'Task deleted' });
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"cannot delete"
        })
    }
}