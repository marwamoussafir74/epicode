
const  express = require( 'express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


let users = [
    {id: 1, name: 'marwa' , lastname: 'moussafir', email: 'marwamoussafir@gmail.com', city: 'london'},
    {id: 2, name: 'maria' , lastname: 'rossi', email: 'mariarossi@gmail.com', city: 'parigi'},
    {id: 3, name: 'giuseppe' , lastname: 'lunari', email: 'giuseppelunari@gmail.com', city: 'roma'}
]
let count = users.lenght +1
//get method route
app.get('/api/users' , (request, response) =>{
    //request.headers.authorization
    response.json(users)
})




//chiamare singolo elemento
app.get('/api/users/:id', (request, response) => {
    const id = request.params.id
    const obj = users.find(user => user.id === +id)
    response.json(obj)
})


//post method
app.post('/api/users/', (request, response) =>{
    const obj = request.body
    obj.id = count++
    if(obj !== undefined) {
    users.push(obj)
    } else {
    response.json('user inserito con successo')
    }
})

// PUT method route
app.put('/api/users/:id', (request,response)=>{
    const id = request.params.id;
    const obj = request.body;
    const obj = users.findIndex(user => user.id === +id);
    users.splice(index, 1, updateObj);
    response.json('users modificato con successo!!')
}
)
//DELETE METHOD ROUTE
app.delete('/api/users/:id', (request,response)=>{
    const id = request.params.id;
    users.filter(user => user.id !== +id)
    response.json('user eliminato con successo')

//attivo server su http://localhost:3000
app.listen(3000, () => console.log('server attivo su porta 3000'))
