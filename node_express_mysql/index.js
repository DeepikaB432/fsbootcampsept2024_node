const express = require('express');
const app = express();
const connection = require('./connection');
const port = 3000;

app.get('/',(req,res) =>{
    res.send("Hello World");
})

app.get('/employees',async (req,res) =>{
    try {
        const [data,fields] = await connection.promise().query('SELECT * FROM fsbootcamp24.employees');
        return res.json(data);
    }catch (errors){
        return res.send(errors);
    }
})

app.get('/departments',async (req,res) =>{
    try {
        const [data,fields] = await connection.promise().query('SELECt * FROM fsbootcamp24.departments');
        return res.json(data);
    }catch (errors){
        return res.send(errors);
    }
})

app.get('/employees/:id', async (req,res) =>{
    const employee_id = req.params.id;
    console.log(employee_id)
    try {
        const [data,fields] = await connection.promise().query(
            `SELECT * from fsbootcamp24.employees
            where employee_id =?`,employee_id);
            if(data.length){
                return res.json(data);
            }else{
                return res.json('Employee Not Found');
            }
    }catch (errors) {
        return res.send(errors)
    }
})

//delete employees based on id

app.delete('/employees/delete/:id',async(req,res) =>{
    const employee_id = req.params.id;
    try {
        const [data,fields] = await connection.promise().query(
            `DELETE FROM fsbootcamp24.employees
            where employee_id =?`,employee_id)
            if(data.affectedRows>0){
                return res.json('Employee Deleted Successfully');
            }else{
                return res.json('Employee Not Found');
            }
    }catch (errors){
        return res.json(errors);
    }
})

app.post('/employees/', async (req,res)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const department_id = req.body.department_id;
})

// to do get departments based on id
//delete departments based on id

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})