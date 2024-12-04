const express = require('express');
const app = express();
const connection = require('./connection');
const port = 3000;
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log("coming in the middleware");
    next();
})

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
            if(data.length>0){
                return res.json(data);
            }else{
                return res.json([]);
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
                return res.json({status : "success"});
            }else{
                return res.json('Employee Not Found');
            }
    }catch (errors){
        return res.json(errors);
    }
});

app.post('/employees/', async (req,res)=>{
    // const first_name = req.body.first_name;
    // const last_name = req.body.last_name;
    // const department_id = req.body.department_id;
    const{first_name,last_name,email,password,department,salary} = req.body
    // res.send(last_name)
    if(!first_name || !department) return res.send('Please Provide the first name and department id');
    if(!email || !password) return res.send('Please Provide the email and password');

    if(last_name == ''){
        last_name = '';
    }

    if(salary == ''){
        salary = 0;
    }

    try{
        const [data] = await connection.promise().query(`INSERT INTO fsbootcamp24.employees
            (first_name,last_name,email,password,department_id,salary)
            VALUES (?,?,?,?,?,?)`, [first_name, last_name,email, password,department,salary]);
            // res.json(data);
            console.log(data)
            if(data.affectedRows>0){
                return res.json('Employees created successfully');
            }else{
                return res.json('Failed to insert employees');
            }
    }catch (errors){
        res.send(errors);
    }
})

// app.patch();

app.put('/employees/update/:id', async(req,res) => {
    const employee_id = req.params.id;
    const {first_name, last_name,email,password, salary,department} = req.body;

    try{
        const [data] = await connection.promise().query(`
            Update fsbootcamp24.employees
            SET first_name =?,last_name=?,email=?,password=?,salary=?,department_id=?
            Where employee_id =?`, [first_name,last_name,email,password,salary,department,employee_id])
            res.json(data);
    }catch(errors){
        res.json(errors)
    }
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})