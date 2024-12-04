const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

const customers = [
    {id:1, name: 'Deepika', age: 27},
    {id:2, name: 'Sam', age: 29},
    {id:3, name: 'Test', age: 20},
    {id:4, name: 'Caffy', age: 24},
    {id:5, name: 'D', age: 25},
]

app.get('/customers', (req,res) => {
    if(!customers) res.status(404).send('No Data Found');
    res.send(customers)
});

app.get('/customers/:id',(req,res) => {
    var customer_id = req.params.id;
    var customer = customers.find(x => x.id ==customer_id )
    if(!customer) res.status(200).send("No Customer Found")
    console.log(customer)
    res.send(customer)
})

app.post('/customers',(req,res) => {
    // if(req.body.name == '' || req.body.id == '') res.send("Please provide all the values");
    if(!req.body.name) res.send("Please provide the name");
    var customer = {
        id: customers.length +1,
        name: req.body.name,
        age: req.body.age
    }
    customers.push(customer)
    res.send(customers)
})

app.delete('/delete_customers/:id',(req,res) =>{
    // res.send(req.params.id)
    var customer_id = req.params.id;
    var customer = customers.find(x => x.id == customer_id) 
    if(!customer) res.send("Customer Not Found")
    
    let index = customers.indexOf(customer);
    customers.splice(index,1);
    res.send(customers);
})

app.put('/update_customer/:id', (request, response) => {
    let customer_id = request.params.id;
    if(!request.body.name) response.send('Please provide updated name for the customer');
    let customer = customers.find(x => x.id == customer_id)
    if(!customer) response.send('Customer not found');
    customer.name = request.body.name;
    response.status(200).json(customer);

});

app.listen(port, () => {
    console.log('example app listening on port' , port)
})